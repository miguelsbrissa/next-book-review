import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import styles from "@/styles/BookReview.module.css";
import { InfoBook } from "@/components/BookReview/InfoBook";
import { UsersReview } from "@/components/BookReview/UsersReview";

export default function BookReview() {
  return (
    <>
      <Head>
        <title>BookReview - Nome do livro</title>
        <meta name="description" content="Site para review de livros" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.content}>
            <InfoBook />
            <UsersReview />
        </div>
      </main>
    </>
  );
}
