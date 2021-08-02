const globby = require('globby');
const prettier = require('prettier');
const fs = require('fs');

async function generateSitemap() {
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('data', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '');
                const route = path === '/index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://paolotiu.com${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);

  console.log('Finished generating sitemap');
}

if (!module.parent) {
  // Called by itself
  generateSitemap();
}

module.exports = generateSitemap;
