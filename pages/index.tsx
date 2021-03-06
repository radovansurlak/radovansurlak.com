import type { NextPage } from "next";
import Head from "next/head";
import { Dove } from "../components/Dove";
import { UkraineFlag } from "../components/UkraineFlag";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function helpUkraine() {
    window.location.href = "https://war.ukraine.ua/support-ukraine/";
  }

  return (
    <div onClick={helpUkraine} className={styles.container}>
      <Head>
        <title>π Support β€οΈ Ukraine πΊπ¦</title>
      </Head>
      <div className={styles.wrapper}>
        <Dove />
        <UkraineFlag />
        <button className={styles.helpUkraineButton} onClick={helpUkraine}>
          π Support β€οΈ Ukraine πΊπ¦
        </button>
      </div>
    </div>
  );
};

export default Home;
