export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://tortuga-cms.vercel.app/sitemap.xml',
  };
}
// export default function robots() {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: '/private/',
//     },
//     sitemap: 'https://tortuga-cms.vercel.app/sitemap.xml',
//   };
// }
