import EcommAnalytics from "@/components/EcommAnalytics/EcommAnalytics";
import EcommConversion from "@/components/EcommConversion/EcommConversion";
import EcommFeatures from "@/components/EcommFeatures/EcommFeatures";
import EcommHero from "@/components/EcommHero/EcommHero";
import EcommIntegrations from "@/components/EcommIntegrations/EcommIntegrations";
import EcommOverview from "@/components/EcommOverview/EcommOverview";
import EcommResponsive from "@/components/EcommResponsive/EcommResponsive";
import EcommSEO from "@/components/EcommSEO/EcommSEO";
import EcommUSP from "@/components/EcommUSP/EcommUSP";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import MPSection1 from "@/components/MPSection1/MPSection1";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Testimonials from "@/components/Testimonials/Testimonials";
import Values from "@/components/Values/Values";
import { ecommerceWebsiteFaqs } from "@/lib/data";

export default function EcommerceStoresPage() {
  return (
    <main>
      <Values />
      <EcommOverview />
      <MPSection1 />
      <EcommFeatures />
      <EcommIntegrations />
      <EcommResponsive />
      <EcommConversion />
      <EcommSEO />
      <EcommAnalytics />
      <EcommUSP />
      <EveryPlan />
      <HowItWorks />
      <Pricing />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Testimonials />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Faqsiii
        mapData={ecommerceWebsiteFaqs}
        text='E-commerce Questions'
        bgColor='gray'
      />
    </main>
  );
}
