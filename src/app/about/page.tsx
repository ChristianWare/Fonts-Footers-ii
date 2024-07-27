import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import PageIntro from "@/components/PageIntro/PageIntro";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import Img from "../../../public/images/house18.png";
import BlogSection from "@/components/BlogSection/BlogSection";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Experience from "@/components/Experience/Experience";
import Mission from "@/components/Mission/Mission";
import Values from "@/components/Values/Values";
import TechStack from "@/components/TechStack/TechStack";
import { Metadata } from "next";
import BrandPresence from "@/components/BrandPresence/BrandPresence";
import EnhancedMarketing from "@/components/EnhancedMarketing/EnhancedMarketing";
import Slider from "@/components/Slider/Slider";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import LongTermRelationships from "@/components/LongTermRelationships/LongTermRelationships";
import { homePageFaqs } from "@/lib/data";

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
  title: "About Us",
};

export default async function AboutPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main>
     
      <Experience />
      <AboutScrollText />
      <BrandPresence />
      <EnhancedMarketing />
      <TechStack />
      <HowItWorks />
      <LongTermRelationships />
      <Testimonials />
      <Faqsiii mapData={homePageFaqs} text='faqs' />
      <BlogSection data={data} />
    </main>
  );
}
