import BlogSection from "@/components/BlogSection/BlogSection";
import Chart from "@/components/Chart/Chart";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import IndividualService from "@/components/IndividualService/IndividualService";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import { homePageFaqs } from "@/lib/data";
import Benefits from "@/components/Benefits/Benefits";

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
      <Pricing bgColor='tan' />
      <ScrollHorizontalText text='Features' bottomBorder={true} />
      <Benefits />
      <ScrollHorizontalText text='Features' bottomBorder={true} />
      <IndividualService />
      <EveryPlan />
      <HowItWorks />
      <Faqsiii mapData={homePageFaqs} />
      <BlogSection data={data} />
    </>
  );
}
