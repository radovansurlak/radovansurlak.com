import type { NextPage } from "next";
import Head from "next/head";
import { Dove } from "../components/Dove";
import { UkraineFlag } from "../components/UkraineFlag";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function helpUkraine() {
    window.location.href = "https://savelife.in.ua/en/donate/";
  }

  return (
    <div onClick={helpUkraine} className={styles.container}>
      <Head>
        <title>🕊 Support ❤️ Ukraine 🇺🇦</title>
      </Head>
      <div className={styles.wrapper}>
        <Dove />
        <UkraineFlag />
        <button className={styles.helpUkraineButton} onClick={helpUkraine}>
          🕊 Support ❤️ Ukraine 🇺🇦
        </button>
      </div>
    </div>
  );
};

export default Home;
