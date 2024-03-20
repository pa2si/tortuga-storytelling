export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://tortuga-cms.vercel.app/sitemap.xml',
  };
}
