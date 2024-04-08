import BlogSection from "@/components/BlogSection/BlogSection";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqs from "@/components/Faqs/Faqs";
import IndividualFeature from "@/components/IndividualFeature/IndividualFeature";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Metadata } from "next";

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

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Pricing",
};

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
      <IndividualFeature />
      <Faqs />
      <BlogSection data={data} />
    </>
  );
}
