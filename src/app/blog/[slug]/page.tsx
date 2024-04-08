import { fullBlog, simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import BlogContent from "@/components/BlogContent/BlogContent";
import { Metadata } from "next";

async function getData(slug: string) {
  const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage,
            smallDescription,
            publishedAt
        }[0]`;

  const data = await client.fetch(query);
  return data;
}

async function getDataii() {
  const query = `
    *[_type == 'blog'][0...3] | order(_createdAt desc) {
      title,
      smallDescription,
      publishedAt,
      "currentSlug": slug.current,
      titleImage
    }`;

  const dataii = await client.fetch(query);

  return dataii;
}

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: fullBlog = await getData(params.slug);
  return {
    title: data.title,
    description: data.smallDescription,
    openGraph: {
      images: [
        {
          url: data.titleImage.toLocaleString(),
        },
      ],
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  const dataii: simpleBlogCard[] = await getDataii();
  return <BlogContent data={data} dataii={dataii} />;
}
