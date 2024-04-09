import { client } from "@/lib/sanity";
import { MetadataRoute } from "next";

const URL = "https://fontsandfooters.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == 'blog'] { 'slug': slug.current }`;
  const slugs = await client.fetch(query);

  const posts = slugs.map(
    ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
      url: `${URL}/blog/${slug}`,
      lastModified: updatedAt,
    })
  );

  const routes = [
    "",
    "/benefits",
    "/about",
    "/pricing",
    "/faqs",
    "/blog",
    "/glossary",
    "/contact",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
