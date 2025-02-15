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
    <section className={styles.moitie}>
      <Image src="/imgs/knznsmn.png" alt="Profile" width={200} height={200} />
    </section>
    <section className={styles.moitie}>
      <h1>I&apos;m Julius Cinco Cesar</h1>
      <p>I&apos;m a graphic designer and a web developer. I love to design and develop websites. For me, learning is equals to 42.
      </p>
    </section>
  </article>,

  <article key="skills" className={styles.skills}>
    <section className={styles.moitie}>
      <h1>Skills</h1>
      <ul>
        <li><i className="icon-html"></i></li>
        <li><i className="icon-css"></i></li>
        <li><i className="icon-js"></i></li>
        <li><i className="icon-ps"></i></li>
        <li><i className="icon-ai"></i></li>
        <li><i className="icon-ae"></i></li>
        <li><i className="icon-pr"></i></li>
      </ul>
    </section>
    <section className={styles.moitie}>
      <p>
        I find it fun pushing pixels and dragging vectors with Adobe Photoshop & Illustrator, and munching texts with vim and VS Code.

      </p>
    </section>
  </article>,

  <article key="projects" className={styles.projets}>
      <h1>Projects</h1>
      <section>
        <div>NSCP</div>
        <div>50MM</div>
        <div>MJAJC</div>
        <div>AMHA</div>
        <div>Maftuha</div>
      </section>
  </article>,

  <article key="contact" className={styles.contact}>
    <section>
      <h1>Contact</h1>
      <p>
        Feel free to contact me at 
        <br />
        <a href="mailto:knznsmn@knznsmn.com">knznsmn@knznsmn.com</a>
      </p>
      <ul>
        <li><a href="https://www.github.com/knznsmn" aria-label="Github profile">
          <i className="icon-github"></i></a>
        </li>
        <li><a href="https://www.x.com/knznsmn" aria-label="Twitter profile">
          <i className="icon-twitter"></i></a>
        </li>
        <li><a href="https://www.instagram.com/knznsmn" aria-label="Instagram profile">
          <i className="icon-instagram"></i></a>
        </li>
        <li><a href="https://www.facebook.com/knznsmn" aria-label="Facebook profile">
          <i className="icon-facebook"></i></a>
        </li>
        <li><a href="https://www.pinterest.com/knznsmn" aria-label="Pinterest profile">
          <i className="icon-pinterest"></i></a>
        </li>
      </ul>
    </section>
    </article>
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Pages sections={sections} />
    </main>  
  );
}
