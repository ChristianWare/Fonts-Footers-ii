import IndividualService from "@/components/IndividualService/IndividualService";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";
import ServicesHero from "@/components/ServicesHero/ServicesHero";

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ScrollHorizontalText text='Our Services' bottomBorder={true} />

      <IndividualService />
    </main>
  );
};
export default ServicesPage;
