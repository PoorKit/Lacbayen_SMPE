import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import CustomerModal from './customerModal';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">FlatPack!</a>
        </h1>
        <CustomerModal />
      </main>
      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
