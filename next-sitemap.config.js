/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://inzint.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://inzint.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const customPriority = {
      '/': 1.0,
      '/services': 0.9,
      '/portfolio': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};