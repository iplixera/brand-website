export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vibe Coding',
  description: 'We build innovative digital solutions with a focus on user experience and cutting-edge technology.',
  url: 'https://vibecoding.com',
  logo: 'https://vibecoding.com/images/logo.png',
  sameAs: [
    'https://twitter.com/vibecoding',
    'https://linkedin.com/company/vibecoding',
    'https://github.com/vibecoding'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UAE',
    addressLocality: 'Dubai'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971585544057',
    contactType: 'customer service'
  }
});

export const getServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Vibe Coding',
    url: 'https://vibecoding.com'
  },
  url: `https://vibecoding.com${service.url}`
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://vibecoding.com${item.url}`
  }))
}); 