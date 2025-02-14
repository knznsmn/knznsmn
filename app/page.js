"use client";
import Pages from "@/components/Pages";
import Image from "next/image";
import styles from "./page.module.css";

const sections = [
  <article key="portfolio" className={styles.portfolio}>
    <h1 className={styles.title}>Portfolio</h1>
    <p>Graphic Designer/Web Developer</p>
  </article>,

  <article key="about" className={styles.about}>
    <section className={styles.gauche}>
      <Image src="/imgs/knznsmn.png" alt="Profile" width={200} height={200} />
    </section>
    <section className={styles.droite}>
      <h1>I&apos;m Julius Cinco Cesar</h1>
      <p>I love to design and develop websites. I&apos;m a graphic designer and a web developer. For me, learning is equals to 42.
      </p>
    </section>
  </article>,

  <article key="skills" className={styles.skills}>
    <section className={styles.droite}>
      <h1>Skills</h1>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe After Effects</li>
        <li>Adobe Premiere Pro</li>
      </ul>
    </section>
    <section className={styles.droite}>
      <p>
        I find it fun pushing pixels and dragging vectors with Adobe Photoshop & Illustrator, and munching texts with vim and VS Code.

      </p>
    </section>
  </article>,

  <article key="projects" className={styles.projects}>
    <h1>Projects</h1>
    <p>Some projects here</p>
  </article>,
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Pages sections={sections} />
    </main>  
  );
}
