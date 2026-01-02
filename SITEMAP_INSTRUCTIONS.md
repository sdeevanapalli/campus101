# Sitemap Generation Instructions

## Overview
A sitemap helps search engines discover and index all pages on your website. This document provides instructions for generating and configuring a sitemap for Campus101.

## Option 1: Automated Sitemap Generation (Recommended)

### Using npm package: sitemap

1. **Install the sitemap package**:
   ```bash
   npm install --save-dev sitemap
   ```

2. **Create a sitemap generator script** (`scripts/generate-sitemap.js`):
   ```javascript
   const { SitemapStream, streamToPromise } = require('sitemap');
   const { createWriteStream } = require('fs');
   const { resolve } = require('path');

   const hostname = 'https://campus101.vercel.app'; // Update with your domain

   const links = [
     { url: '/', changefreq: 'weekly', priority: 1.0 },
     { url: '/hyderabad', changefreq: 'monthly', priority: 0.8 },
     { url: '/goa', changefreq: 'monthly', priority: 0.8 },
     { url: '/pilani', changefreq: 'monthly', priority: 0.8 },
   ];

   const stream = new SitemapStream({ hostname });

   links.forEach(link => {
     stream.write(link);
   });

   stream.end();

   streamToPromise(stream).then(data => {
     const sitemap = data.toString();
     const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));
     writeStream.write(sitemap);
     writeStream.end();
     console.log('Sitemap generated successfully!');
   });
   ```

3. **Add script to package.json**:
   ```json
   {
     "scripts": {
       "generate-sitemap": "node scripts/generate-sitemap.js",
       "build": "npm run generate-sitemap && vite build"
     }
   }
   ```

4. **Run the generator**:
   ```bash
   npm run generate-sitemap
   ```

5. **Update robots.txt**:
   Uncomment the sitemap line in `public/robots.txt`:
   ```
   Sitemap: https://campus101.vercel.app/sitemap.xml
   ```

## Option 2: Online Sitemap Generator

1. **Visit an online generator**:
   - https://www.xml-sitemaps.com/
   - https://www.sitemaps.org/protocol.html

2. **Enter your website URL**: `https://campus101.vercel.app`

3. **Configure options**:
   - Change frequency: Weekly
   - Priority: 1.0 for homepage, 0.8 for other pages

4. **Download the generated `sitemap.xml`**

5. **Place it in the `public/` directory**

6. **Update robots.txt** as described above

## Option 3: Manual Creation

Create `public/sitemap.xml` with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://campus101.vercel.app/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://campus101.vercel.app/hyderabad</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://campus101.vercel.app/goa</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://campus101.vercel.app/pilani</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Important**: Update the `<lastmod>` dates to reflect when pages were last modified.

## Submitting to Search Engines

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property (website URL)
3. Verify ownership (DNS, HTML file, or Google Analytics)
4. Go to Sitemaps section
5. Submit: `https://campus101.vercel.app/sitemap.xml`

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Go to Sitemaps section
5. Submit your sitemap URL

## Maintenance

- **Update regularly**: Regenerate your sitemap when you add new pages
- **Keep lastmod current**: Update modification dates when content changes
- **Test your sitemap**: Use https://www.xml-sitemaps.com/validate-xml-sitemap.html

## Notes

- Sitemap must be in the `public/` directory to be served at the root
- Maximum 50,000 URLs per sitemap
- File size limit: 50MB (uncompressed)
- For larger sites, consider sitemap index files

