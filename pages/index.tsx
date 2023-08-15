import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import CustomerModal from './components/customerForm';
import Header from './components/header';
import Footer from './components/footer';
import DynamicDataTable from './components/dataTable';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FlatPack App</title>
      </Head>
      <Header />
      <main className="p-12 w-screen">
        <CustomerModal />
        <DynamicDataTable />
      </main>
      <Footer />
    </div>
  );
}
