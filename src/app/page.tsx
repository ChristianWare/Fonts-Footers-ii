import Hero from "@/components/Hero/Hero";
import ScrollText from "@/components/ScrollText/ScrollText";
import Benefits from "@/components/Benefits/Benefits";
import AboutUs from "@/components/AboutUs/AboutUs";
import Features from "@/components/Features/Features";
import Process from "@/components/Process/Process";
import Pricing from "@/components/Pricing/Pricing";
import Projects from "@/components/Projects/Projects";
import Faqs from "@/components/Faqs/Faqs";
import BlogSection from "@/components/BlogSection/BlogSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Challenges from "@/components/Challenges/Challenges";
import Carouselii from "@/components/Carouselii/Carouselii";
import Slider from "@/components/Slider/Slider";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

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
      <ScrollHorizontalText text='Our Clients' bottomBorder={true} />
      <Slider />
      <ScrollHorizontalText text='Our Clients' bottomBorder={false} />
      {/* <Process /> */}
      <ServicesSection />
      <Projects />
      <Features />
      <AboutUs />
      <ScrollText />
      <Benefits />
      <Pricing />
      {/* <Testimonials /> */}
      {/* <Faqs /> */}
      {/* <BlogSection data={data} /> */}
    </main>
  );
}
