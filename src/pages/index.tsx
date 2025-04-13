import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WhatsAppBubble from '@/components/common/WhatsAppBubble';
import SEO from '@/components/common/SEO';
import JsonLd from '@/components/common/JsonLd';
import { getOrganizationSchema } from '@/utils/structuredData';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO 
        title="Vibe Coding • Creative Tech"
        description="Leading software development company in Dubai. We build innovative digital solutions with a focus on user experience and cutting-edge technology. Specializing in web development, mobile apps, and custom software solutions."
        keywords="web development dubai, mobile apps dubai, software development dubai, UI/UX design dubai, React development, Next.js development, TypeScript development, tech company dubai, software company uae"
      />
      <JsonLd data={getOrganizationSchema()} />
      <Hero />
      <WhatsAppBubble />
    </Layout>
  );
};

export default Home;
