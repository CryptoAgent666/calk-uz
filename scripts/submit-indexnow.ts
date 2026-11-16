/**
 * Submit all sitemap URLs to IndexNow for Bing/Yandex instant indexing.
 * Usage: npx tsx scripts/submit-indexnow.ts
 */

const SITE_URL = process.env.SITE_URL || "https://calk.uz";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function main() {
  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);

  const sitemapRes = await fetch(SITEMAP_URL);
  if (!sitemapRes.ok) {
    console.error(`Failed to fetch sitemap: ${sitemapRes.status}`);
    process.exit(1);
  }

  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.error("No URLs found in sitemap.");
    process.exit(1);
  }

  console.log(`Found ${urls.length} URLs. Submitting to IndexNow...`);

  // IndexNow accepts max 10,000 URLs per request
  const BATCH_SIZE = 10_000;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);

    const res = await fetch(`${SITE_URL}/api/indexnow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urls: batch }),
    });

    const data = await res.json();
    console.log(
      `Batch ${Math.floor(i / BATCH_SIZE) + 1}: submitted ${data.submitted} URLs — IndexNow status ${data.status}`
    );
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
