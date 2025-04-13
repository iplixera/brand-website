import { GetServerSideProps } from 'next';

const baseUrl = 'https://plixera.com';

const generateSiteMap = (pages: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${`${baseUrl}${page}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${page === '/' ? '1.0' : '0.7'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
};

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/careers',
    '/services/mvp-development',
    '/services/tech-products',
    '/services/commercial-products',
  ];

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 