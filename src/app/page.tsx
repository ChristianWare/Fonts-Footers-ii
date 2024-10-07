import Hero from "@/components/Hero/Hero";
import ScrollText from "@/components/ScrollText/ScrollText";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import BlogSection from "@/components/BlogSection/BlogSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { homePageFaqs } from "@/lib/data";
import Usp from "@/components/Usp/Usp";
import Problem from "@/components/Problem/Problem";
import Solution from "@/components/Solution/Solution";
import ServicePreview from "@/components/ServicePreview/ServicePreview";
import ContactHero from "@/components/ContactHero/ContactHero";
import Calendly from "@/components/Calendly/Calendly";
import ContactDetails from "@/components/ContactDetails/ContactDetails";

// async function getData() {
//   const query = `
//     *[_type == 'blog'][0...3] | order(_createdAt desc) {
//       title,
//       smallDescription,
//       publishedAt,
//       "currentSlug": slug.current,
//       titleImage
//     }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export const revalidate = 10;

export default async function Home() {
  // const data: simpleBlogCard[] = await getData();

  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <AboutScrollText />
      <Usp />
      <ServicePreview />
      <EveryPlan />
      <Pricing bgColor='tan' />
      <Projects />
      <HowItWorks />
      <Testimonials />
      <Faqsiii mapData={homePageFaqs} text='Frequently Asked Questions' />
      <ScrollText />
      <Calendly />
      <ContactDetails />
      <ContactHero />
    </main>
  );
}
