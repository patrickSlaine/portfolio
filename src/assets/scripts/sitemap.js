const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');
const { blogs } = require("../blogs.js");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://patrickslaine.co.uk' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
sitemap.write({ url: '/education', changefreq: 'monthly', priority: 0.9 });
sitemap.write({ url: '/experience', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });

for (let i = 1; i < blogs["data"].length+1; i++){
    sitemap.write({ url: '/blogs/'+i, changefreq: 'monthly', priority: 0.7 });
}

if(blogs.data.length>0){
    sitemap.write({url:"/blogs",changefreq:'monthly',priority:0.8});
}

sitemap.end();