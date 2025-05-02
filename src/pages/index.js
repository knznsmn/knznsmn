import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <main className={styles.page}>
      <article>
        <h1>
          <Link
            href='/docs'
            title='Go to docs'
          >
            ft_printf
          </Link>
        </h1>
      </article> 
    </main> 
  );
}
