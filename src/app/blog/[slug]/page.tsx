import { fullBlog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import BlogContent from "@/components/BlogContent/BlogContent";

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

export const revalidate = 10;

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return <BlogContent data={data} />;
}
