import BlogSection from "@/components/BlogSection/BlogSection";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqs from "@/components/Faqs/Faqs";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
    *[_type == 'blog'][0...2] | order(_createdAt desc) {
      title,
      smallDescription,
      publishedAt,
      "currentSlug": slug.current,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 10;

export default async function PricingPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro
        h1Color='green'
        h1OutlineColor='greenOutline'
        text='Simple'
        span='Pricing Plans'
        copyColor='green'
        orientation='center'
      />
      <ScrollHorizontalText />
      <Pricing />
      <EveryPlan />
      <Faqs />
      <BlogSection data={data} />
    </>
  );
}