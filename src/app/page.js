import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello, World!</h1>
        <p>Welcome to my Next.js application</p>
      </div>
    </main>
  );
}
