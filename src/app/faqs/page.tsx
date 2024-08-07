import BlogSection from "@/components/BlogSection/BlogSection";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import {
  bookingWebsiteFaqs,
  businessWebsiteFaqs,
  ecommerceWebsiteFaqs,
  homePageFaqs,
  projectFaqs,
  servicesFaqs,
} from "@/lib/data";

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

export const metadata: Metadata = {
  title: "FAQ's",
};

export default async function FAQPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro
        text='Frequently asked Questions'
        h1Color='black'
        copy="Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time."
        copyColor='black'
        orientation='center'
        bgColor='tan'
      />
      <Faqsiii mapData={homePageFaqs} text='General' />
      <Faqsiii mapData={servicesFaqs} text='Services' bgColor='gray' />
      <Faqsiii mapData={bookingWebsiteFaqs} text='Booking' />
      <Faqsiii
        mapData={ecommerceWebsiteFaqs}
        text='E-Commerce'
        bgColor='white'
      />
      <Faqsiii
        mapData={businessWebsiteFaqs}
        text='Business Website'
        bgColor='gray'
      />
      <Faqsiii mapData={projectFaqs} text='Project' />

      <Pricing />
      <BlogSection data={data} />
    </>
  );
}
