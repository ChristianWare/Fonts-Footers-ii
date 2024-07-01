import BenefitsIntro from "@/components/BenefitsIntro/BenefitsIntro";
import BlogSection from "@/components/BlogSection/BlogSection";
import BrandPresence from "@/components/BrandPresence/BrandPresence";
import Cta from "@/components/CTA/Cta";
import DirectCommunication from "@/components/DirectCommunication/DirectCommunication";
import EnhancedMarketing from "@/components/EnhancedMarketing/EnhancedMarketing";
import HigherMargins from "@/components/HigherMargins/HigherMargins";
import LongTermRelationships from "@/components/LongTermRelationships/LongTermRelationships";
import PageIntro from "@/components/PageIntro/PageIntro";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import Carousel from "@/components/Carousel/Carousel";

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
  title: "Benefits",
};

export default async function BenefitsPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro
        h1Color='green'
        h1OutlineColor='greenOutline'
        text='benefits of'
        span='direct booking'
        copy='Having your own direct booking website empowers you to establish a stronger online presence, enhance customer relationships, increase revenue, and maintain greater control over your operations and branding.'
        copyColor='green'
        orientation='center'
      />
      {/* <ScrollHorizontalText /> */}
      <BenefitsIntro />
      {/* <HigherMargins /> */}
      <BrandPresence />
      <DirectCommunication />
      <EnhancedMarketing />
      <LongTermRelationships />
      {/* <Carousel /> */}
      <Cta />
      <BlogSection data={data} />
    </>
  );
}
