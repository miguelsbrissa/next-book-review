import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components/Navbar";
import { BookCard } from "@/components/BookCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>BookReview</title>
        <meta name="description" content="Site para review de livros" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <Navbar />
        <div className={styles.cards}>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </main>
    </>
  );
}
