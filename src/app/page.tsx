import Hero from "@/components/Hero/Hero";
import ScrollText from "@/components/ScrollText/ScrollText";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import BlogSection from "@/components/BlogSection/BlogSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Slider from "@/components/Slider/Slider";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { homePageFaqs } from "@/lib/data";
import Usp from "@/components/Usp/Usp";

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
      <AboutScrollText />
      <ServicesSection />
      <EveryPlan />
      <Usp />
      <HowItWorks />
      <Testimonials />
      <Projects />
      <Pricing bgColor='tan' />
      <Faqsiii mapData={homePageFaqs} text='General Questions' />
      <BlogSection data={data} />
      <ScrollText />
    </main>
  );
}
