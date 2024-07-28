import BookingHero from "@/components/BookingHero/BookingHero";
import BookingReminders from "@/components/BookingReminders/BookingReminders";
import BookingScrollText from "@/components/BookingScrollText/BookingScrollText";
import BookingService from "@/components/BookingService/BookingService";
import EveryPlan from "@/components/EveryPlan/EveryPlan";
import Faqsiii from "@/components/Faqsiii/Faqsiii";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import IndividualFeature from "@/components/IndividualFeature/IndividualFeature";
import Mission from "@/components/Mission/Mission";
import Pricing from "@/components/Pricing/Pricing";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import Testimonials from "@/components/Testimonials/Testimonials";
import Usp from "@/components/Usp/Usp";
import { bookingWebsiteFaqs } from "@/lib/data";

export default function BookingPlatformPage() {
  return (
    <main>
      <Mission />
      <BookingScrollText />
      <BookingService />
      <BookingReminders />
      <IndividualFeature />
      <EveryPlan />
      <Usp />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faqsiii
        bgColor='gray'
        mapData={bookingWebsiteFaqs}
        text='Booking Questions'
      />
    </main>
  );
}
