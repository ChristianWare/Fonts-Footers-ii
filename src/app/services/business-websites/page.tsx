import BusinessHero from "@/components/BusinessHero/BusinessHero";
import BusinessLeadGen from "@/components/BusinessLeadGen/BusinessLeadGen";
import BusinessSEO from "@/components/BusinessSEO/BusinessSEO";
import DirectCommunication from "@/components/DirectCommunication/DirectCommunication";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HigherMargins from "@/components/HigherMargins/HigherMargins";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Testimonials from "@/components/Testimonials/Testimonials";
import Usp from "@/components/Usp/Usp";
import { homePageFaqs } from "@/lib/data";

export default function BusinessWebsites() {
  return (
    <main>
      <BusinessHero />

      <ScrollHorizontalText text='Bespoke Websites' bottomBorder={false} />
      <HigherMargins />
      <ScrollHorizontalText text='Bespoke Websites' bottomBorder={false} />
      <DirectCommunication />
      <BusinessSEO />
      <BusinessLeadGen />
      <EveryPlan />
      <Usp />
      <HowItWorks />
      <Pricing />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Testimonials />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Faqsiii mapData={homePageFaqs} />
    </main>
  );
}
