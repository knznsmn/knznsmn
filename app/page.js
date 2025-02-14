import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>knznsmn</h1>
      <p className={styles.description}>
        <Link href="/notebook" aria-label="Go to notebook">
          online notebook
        </Link>
      </p>
    </main>  
  );
}
