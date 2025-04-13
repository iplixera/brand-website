import { GetServerSideProps } from 'next';

const Robots = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://vibecoding.com/sitemap.xml
Sitemap: https://vibecoding.com/image-sitemap.xml

# Disallow admin and api routes
Disallow: /admin/
Disallow: /api/

# Crawl delay
Crawl-delay: 10

# Additional rules
Allow: /*.js$
Allow: /*.css$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.gif$
Allow: /*.svg$
  `.trim();

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default Robots; 