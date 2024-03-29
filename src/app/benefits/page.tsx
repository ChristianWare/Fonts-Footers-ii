import BenefitsIntro from "@/components/BenefitsIntro/BenefitsIntro";
import BrandPresence from "@/components/BrandPresence/BrandPresence";
import DirectCommunication from "@/components/DirectCommunication/DirectCommunication";
import HigherMargins from "@/components/HigherMargins/HigherMargins";
import PageIntro from "@/components/PageIntro/PageIntro";

const page = () => {
  return (
    <>
      <PageIntro
        h1Color='green'
        h1OutlineColor='greenOutline'
        text='benefits of'
        span='direct booking'
        copy='Having your own direct booking website empowers you to establish a stronger online presence, enhance customer relationships, increase revenue, and maintain greater control over your operations and branding.'
        copyColor='green'
        center='center'
      />
      <BenefitsIntro />
      <HigherMargins />
      <BrandPresence />
      <DirectCommunication />
    </>
  );
};
export default page;
