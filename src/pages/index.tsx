import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WhatsAppBubble from '@/components/common/WhatsAppBubble';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <WhatsAppBubble />
    </Layout>
  );
};

export default Home;
