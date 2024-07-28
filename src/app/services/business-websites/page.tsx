import BusinessFeatures from "@/components/BusinessFeatures/BusinessFeatures";
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
import { businessWebsiteFaqs } from "@/lib/data";

export default function BusinessWebsites() {
  return (
    <main>
      <BusinessHero />
      <HigherMargins />
      <DirectCommunication />
      <BusinessFeatures />
      <BusinessSEO />
      <BusinessLeadGen />
      <EveryPlan />
      <Usp />
      <HowItWorks />
      <Pricing borderTop='borderTop' />
      <Testimonials />
      <Faqsiii
        bgColor='gray'
        mapData={businessWebsiteFaqs}
        text="Business Website FAQ's"
      />
    </main>
  );
}
