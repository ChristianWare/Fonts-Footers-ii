import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Testimonials from "@/components/Testimonials/Testimonials";
import { homePageFaqs } from "@/lib/data";

export default function BookingPlatformPage() {
  return (
    <main>
      <h1>Booking Platforms</h1>
      <EveryPlan />
      <HowItWorks />
      <Pricing />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Testimonials />
      <ScrollHorizontalText text='Reviews' bottomBorder={false} />
      <Faqsiii mapData={homePageFaqs} />
    </main>
  );
}
