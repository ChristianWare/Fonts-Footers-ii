import BlogSection from "@/components/BlogSection/BlogSection";
import Faqsii from "@/components/Faqsii/Faqsii";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
    *[_type == 'blog'][0...3] | order(_createdAt desc) {
      title,
      smallDescription,
      publishedAt,
      "currentSlug": slug.current,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function FAQPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro
        text='Frequently'
        span='Asked Questions'
        h1OutlineColor='greenOutline'
        h1Color='green'
        copy="Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time."
        copyColor='green'
      />
      <Faqsii />
      <Pricing />
      <BlogSection data={data} />
    </>
  );
}
