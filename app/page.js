import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Blog</h1>
        <p className={styles.description}>Discover amazing posts and dive into the world of knowledge.</p>
        <div className={styles.animation}>✨</div>
        <p>Click below to view all posts:</p>
        <Link href="/posts">
          <div className={styles.button}>View Posts</div>
        </Link>
      </div>
    
  );
}
