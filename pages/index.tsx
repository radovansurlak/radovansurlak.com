import type { NextPage } from "next";
import { Dove } from "../components/Dove";
import { UkraineFlag } from "../components/UkraineFlag";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Dove />
      <UkraineFlag />
    </div>
  );
};

export default Home;
