import BenefitsIntro from "@/components/BenefitsIntro/BenefitsIntro";
import BlogSection from "@/components/BlogSection/BlogSection";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import IndividualService from "@/components/IndividualService/IndividualService";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import ServicesHero from "@/components/ServicesHero/ServicesHero";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { homePageFaqs, servicesFaqs } from "@/lib/data";

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

export default async function ServicesPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main>
      <ServicesHero />
      <BenefitsIntro />
      <IndividualService />
      <EveryPlan />
      <Faqsiii mapData={servicesFaqs} text="Service FAQ's" />
      <BlogSection data={data} />
    </main>
  );
}
