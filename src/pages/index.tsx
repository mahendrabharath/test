import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import Address from "../components/Common/Address";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";
import { AppState } from "../store";
import { updateStudentAddress } from "../features/student/StudentSlice";

const IndexPage: NextPage = () => {
  const { address } = useSelector((state: AppState) => state.student);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Address
        {...address}
        setAddressValue={(key, value) => {
          updateStudentAddress({ key, value });
        }}
      />
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default IndexPage;
