import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </Layout>
  );
};

export default Home;
