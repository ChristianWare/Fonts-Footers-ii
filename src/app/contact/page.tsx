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
      <ContactHero />
      <ContactDetails />
      <Calendly />
    </>
  );
}
