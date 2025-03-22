export function Nav() {
  const nav = document.createElement('nav');
  const ul  = document.createElement('ul');
  
  const items = [
    {href: '/', text: 'Home'},
    {href: '/blog', text: 'Blog'},
    {href: '/projects', text: 'Projects'},
    {href: '/about', text: 'About Me'},
  ];
  
  items.forEach(item => {
    const li  = document.createElement('li');
    const a   = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const header = document.getElementsByTagName('header')[0];
  header.appendChild(nav);

  return header;
}