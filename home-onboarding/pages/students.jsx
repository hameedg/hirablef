import React from 'react';
import Head from 'next/head';

import Navbar from '../components/LandingPage/MainNavigation';
import Hero from '../components/students/Hero';
import Connect from '../components/students/Connect';
import Values from '../components/students/Values';
import Statistics from '../components/students/Statistics';
import Card from '../components/LandingPage/Card';
import CallforAction from '../components/students/CallforAction';
import Footer from '../components/students/Footer';

function students() {
  return (
    <>
      <Head>
        <title>Hirable - Students</title>
      </Head>
      <Navbar />
      <section className="bg-[#f4efe9] ">
        <Hero />
        <Connect />
        <Values />
        <Statistics />
        <Card />
        <CallforAction />
      </section>
      <Footer />
    </>
  );
}

export default students;
