const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const path = require("path");

// List of URLs to include in the sitemap
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  // Add more routes as needed
];

// Sitemap generation function
const generateSitemap = async () => {
  const sitemap = new SitemapStream({
    hostname: "https://emmanuel-portfolio-six.vercel.app/",
  });

  // Add each link to the sitemap
  links.forEach((link) => sitemap.write(link));

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then((data) =>
    data.toString()
  );

  // Write the sitemap file to the public directory
  fs.writeFileSync(
    path.resolve(__dirname, "public", "sitemap.xml"),
    sitemapXML
  );

  console.log("Sitemap generated at /public/sitemap.xml");
};

generateSitemap();
