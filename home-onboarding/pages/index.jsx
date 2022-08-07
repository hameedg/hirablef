import Head from 'next/head';
import Index from '../components/LandingPage';
import LandingPage from '../components/LandingPage/LandingPage';
import Footer from '../components/students/Footer';

const Home = () => (
  <div className="bg-white">
    <Head>
      <title>Hirable</title>
    </Head>
    <Index>
      <LandingPage />
    </Index>
    <Footer />
  </div>
);

export default Home;
