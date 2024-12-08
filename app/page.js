import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>knznsmn</h1>
      <p className={styles.description}>Graphic Design</p>
      <p className={styles.description}>Web Development</p>

    </main>  
  );
}
