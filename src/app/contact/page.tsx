import Calendly from "@/components/Calendly/Calendly";
import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ContactHero from "@/components/ContactHero/ContactHero";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import PageIntro from "@/components/PageIntro/PageIntro";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Usp from "@/components/Usp/Usp";
import { homePageFaqs } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function FAQPage() {
  return (
    <>
      <ContactHero />
      <Calendly />
      <ContactDetails />
      <Pricing bgColor='gray' borderTop='borderTop' />
      <Faqsiii mapData={homePageFaqs} text="Faq's" />
      <Usp />
    </>
  );
}
