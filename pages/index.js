import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CustomerForm from '../components/CustomerForm';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App</title>
      </Head>
      <main className={styles.main}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Customer Form Modal"
        >
          <h2>Customer Form</h2>
          <CustomerForm />
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </main>
      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
