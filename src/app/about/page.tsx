import AboutGrid from "@/components/AboutGrid/AboutGrid";
import AboutScrollText from "@/components/AboutScrollText/AboutScrollText";
import PageIntro from "@/components/PageIntro/PageIntro";
import { client } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import BlogSection from "@/components/BlogSection/BlogSection";

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

export default async function AboutPage() {
  const data: simpleBlogCard[] = await getData();

  return (
    <>
      <PageIntro
        text='About'
        span='Fonts & Footers'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
      />
      <AboutScrollText />
      {/* <AboutGrid /> */}
      <BlogSection data={data} />
    </>
  );
}
