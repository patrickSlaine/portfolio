const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://patrickslaine.co.uk' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/education', changefreq: 'monthly', priority: 0.9 });
sitemap.write({ url: '/experience', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });
sitemap.end();