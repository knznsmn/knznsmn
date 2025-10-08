import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/contents.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      data.filter(
        (item) =>
          (item.title && item.title.toLowerCase().includes(q)) ||
          (item.text && item.text.toLowerCase().includes(q))
      )
    );
  }, [query, data]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <div className={styles.searchResults}>
          <div style={{ marginBottom: '0.5rem', color: '#888' }}>
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map((item, i) => (
              <li key={i} className={styles.searchResultItem}>
                <a href={item.url} className={styles.searchResultTitle}>{item.title || item.url}</a>
                <div className={styles.searchResultSnippet}>{item.text.slice(0, 160)}...</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
