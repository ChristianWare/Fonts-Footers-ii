import Hero from "@/components/Hero/Hero";
import ScrollText from "@/components/ScrollText/ScrollText";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import BlogSection from "@/components/BlogSection/BlogSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { homePageFaqs } from "@/lib/data";
import Usp from "@/components/Usp/Usp";
import TechStack from "@/components/TechStack/TechStack";
import Problem from "@/components/Problem/Problem";
import Solution from "@/components/Solution/Solution";

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

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <AboutScrollText />
      <Usp />
      <ServicesSection />
      <EveryPlan />
      <TechStack />
      <HowItWorks />
      <Testimonials />
      <Projects />
      <Pricing bgColor='tan' />
      <Faqsiii mapData={homePageFaqs} text='Frequently Asked Questions' />
      <BlogSection data={data} />
      <ScrollText />
    </main>
  );
}
