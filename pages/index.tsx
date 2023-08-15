import Head from 'next/head';
import React from 'react';
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
      <main className="p-8 w-screen">
        <DynamicDataTable />
      </main>
      <Footer />
    </div>
  );
}
