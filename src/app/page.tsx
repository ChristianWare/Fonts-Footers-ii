import Image from "next/image";
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

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollText />
      <Benefits />
      <AboutUs />
      <Features />
      <Process />
      <Pricing />
      <Projects />
      <Faqs />
      <BlogSection />
    </main>
  );
}
