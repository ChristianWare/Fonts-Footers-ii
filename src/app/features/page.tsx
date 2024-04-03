import BlogSection from "@/components/BlogSection/BlogSection";
import Faqs from "@/components/Faqs/Faqs";
import FeaturesPageIntro from "@/components/FeaturesPageIntro/FeaturesPageIntro";
import IndividualFeature from "@/components/IndividualFeature/IndividualFeature";
import Pricing from "@/components/Pricing/Pricing";
import Process from "@/components/Process/Process";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
    *[_type == 'blog'][0...2] | order(_createdAt desc) {
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

export default async function FeaturesPages() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <FeaturesPageIntro />
      <ScrollHorizontalText />

      <IndividualFeature />
      <Process />
      <Pricing />
      <Faqs />
      <BlogSection data={data} />
    </>
  );
}
