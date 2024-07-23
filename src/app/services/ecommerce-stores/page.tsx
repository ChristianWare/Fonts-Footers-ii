import EcommAnalytics from "@/components/EcommAnalytics/EcommAnalytics";
import EcommConversion from "@/components/EcommConversion/EcommConversion";
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
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Testimonials from "@/components/Testimonials/Testimonials";
import { homePageFaqs } from "@/lib/data";

export default function EcommerceStoresPage() {
  return (
    <main>
      <EcommHero />
      <EcommOverview />
      <MPSection1 />
      <EcommIntegrations />
      <EcommResponsive />
      <EcommConversion />
      <EcommSEO />
      <EcommAnalytics />
      <EcommUSP />
      <EveryPlan />
      <HowItWorks />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Testimonials />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />

      <Faqsiii mapData={homePageFaqs} />
    </main>
  );
}
