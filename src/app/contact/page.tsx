import Calendly from "@/components/Calendly/Calendly";
import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ContactHero from "@/components/ContactHero/ContactHero";
import PageIntro from "@/components/PageIntro/PageIntro";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function FAQPage() {
  return (
    <>
      {/* <PageIntro
        text='Contact'
        span='Fonts & Footers'
        h1Color='green'
        h1OutlineColor='greenOutline'
        copy="Whether you're a prospective client or have questions about our services, reaching out is simple and quick. We're ready to assist you to ensuring a seamless and personalized experience as you take the next step in transforming your vacation rental business."
        copyColor='green'
      /> */}
      {/* <ScrollHorizontalText /> */}
      <ContactHero />
      <ContactDetails />
      <Calendly />
    </>
  );
}
