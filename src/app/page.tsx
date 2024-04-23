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
      {/* <ScrollHorizontalText /> */}
      {/* <ScrollText /> */}
      <Challenges />
      <AboutUs />
      <Features />
      <Benefits />
      <Process />
      <Pricing />
      <Projects />
      <Testimonials />
      <Faqs />
      <BlogSection data={data} />
    </main>
  );
}
