import Image from "next/image";
import styles from "./page.module.css";




export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.h1}>
        <h1> Welcome to the Library </h1>
        <div className={styles.h3}>
          <h3>Here you'll get a vast collection of books of all genre.</h3>
          <button type="button" value="button">Let's Get Started</button>
        </div>
      </div>

      <main className={styles.main}>
      <Image
      src="/library.jpeg" 
      alt="Library Image"
      width={100}
      height={100}
      priority
      />


      <div className={styles.a}>
        <ul>
          <li><a href="#tab-1" id="onlink">All</a></li>
          <li><a href="#tab-2">Books & Media</a></li>
          <li><a href="#tab-3">Journals & Articles</a></li>
          <li><a href="#tab-4">More</a></li>
        </ul>
      </div>


        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#tab-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Sign In
          </a>
          <a
            href="#tab-1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Sign Up
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        Chittagong International Library
        <a href="#tab-1">Facebook</a>
        <a href="#tab-1">YouTube</a>
      </footer>
    </div>
  );
}
