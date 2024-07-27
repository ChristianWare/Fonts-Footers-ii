import BlogSection from "@/components/BlogSection/BlogSection";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import PageIntro from "@/components/PageIntro/PageIntro";
import Projects from "@/components/Projects/Projects";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { projectFaqs } from "@/lib/data";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import TechStack from "@/components/TechStack/TechStack";

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

export default async function page() {
  const data: simpleBlogCard[] = await getData();

  return (
    <main>
      <PageIntro
        text='Projects'
        h1Color='black'
        copy="Here are some commonly asked questions and their answers below. If you don't see your questions here, call us any time."
        copyColor='black'
        orientation='center'
        bgColor='tan'
      />
      <div style={{ marginTop: "-300px" }}>
        <Projects borderBottom='borderBottomNone' />
      </div>
      <TechStack />
      <EveryPlan />
      <Faqsiii mapData={projectFaqs} text='Project Related Questions' />
      <BlogSection data={data} />
    </main>
  );
}
