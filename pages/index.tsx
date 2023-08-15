import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import CustomerModal from './components/customerForm';
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <CustomerModal />
        
      </main>
      <Footer />
    </div>
  );
}
