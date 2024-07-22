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
      <PageIntro
        text='About'
        span='Fonts & Footers'
        src={Img}
        orientation='center'
      />
      <AboutScrollText />
      <ScrollHorizontalText text='Our Clients' bottomBorder={true} />
      <Slider />
      <ScrollHorizontalText text='Our Clients' bottomBorder={true} />
      <BrandPresence />
      <EnhancedMarketing />
      <ScrollHorizontalText text='OUR ECOSYSTEM' bottomBorder={false} />
      <HowItWorks />
      <ScrollHorizontalText text='OUR ECOSYSTEM' bottomBorder={false} />

      <LongTermRelationships />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Testimonials />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Mission />
      <Faqsiii mapData={homePageFaqs} />
      <BlogSection data={data} />
    </main>
  );
}
