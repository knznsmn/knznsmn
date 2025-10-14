// Node.js script to index Markdown/MDX files in /docs and /blog for Docusaurus search
// Outputs a contents.json file with title, url, and text for each document

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DOCS_DIR = path.join(__dirname, '../../docs');
const BLOG_DIR = path.join(__dirname, '../../blog');
const OUTPUT_DIR = path.join(__dirname, '../../static/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'contents.json');

function walkDir(dir, ext = ['.md', '.mdx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath, ext));
    } else if (ext.includes(path.extname(file))) {
      results.push(filePath);
    }
  });
  return results;
}

function extractContent(filePath, baseDir, type) {
  const relPath = path.relative(baseDir, filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  let title = data.title || '';
  if (!title) {
    // Try to extract first heading
    const match = content.match(/^#\s+(.+)/m);
    if (match) title = match[1];
  }
  // Remove markdown formatting for search
  const text = content.replace(/[#>*_`\[\]!-]/g, '').replace(/\n+/g, ' ').trim();
  let url = '';
  if (type === 'docs') {
    url = '/docs/' + relPath.replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  } else if (type === 'blog') {
    // Blog URLs are /blog/yyyy-mm-dd-title
    const basename = path.basename(filePath, path.extname(filePath));
    url = '/blog/' + basename;
  }
  return { title, url, text };
}

function buildIndex() {
  let index = [];
  // Docs
  if (fs.existsSync(DOCS_DIR)) {
    const docsFiles = walkDir(DOCS_DIR);
    docsFiles.forEach(f => {
      index.push(extractContent(f, DOCS_DIR, 'docs'));
    });
  }
  // Blog
  if (fs.existsSync(BLOG_DIR)) {
    const blogFiles = walkDir(BLOG_DIR);
    blogFiles.forEach(f => {
      index.push(extractContent(f, BLOG_DIR, 'blog'));
    });
  }
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));
  console.log(`Indexed ${index.length} documents.`);
}

buildIndex();
