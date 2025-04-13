import { GetServerSideProps } from 'next';

const ImageSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://vibecoding.com';
  
  const images = [
    {
      url: '/images/logo.png',
      title: 'Vibe Coding Logo',
      caption: 'Official logo of Vibe Coding'
    },
    {
      url: '/images/team/ceo-ai.jpg',
      title: 'CEO & Founder',
      caption: 'Karim Magdy - CEO & Founder of Vibe Coding'
    },
    {
      url: '/images/team/cto-ai.jpg',
      title: 'CTO',
      caption: 'Alex Chen - Chief Technology Officer'
    },
    {
      url: '/images/team/cpo-ai.jpg',
      title: 'CPO',
      caption: 'Sarah Johnson - Chief Product Officer'
    },
    {
      url: '/images/team/designer-ai.jpg',
      title: 'Lead Designer',
      caption: 'Marcus Rodriguez - Lead Designer'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <url>
        <loc>${baseUrl}</loc>
        ${images.map(image => `
          <image:image>
            <image:loc>${baseUrl}${image.url}</image:loc>
            <image:title>${image.title}</image:title>
            <image:caption>${image.caption}</image:caption>
          </image:image>
        `).join('')}
      </url>
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default ImageSitemap; 