import BenefitsIntro from "@/components/BenefitsIntro/BenefitsIntro";
import BrandPresence from "@/components/BrandPresence/BrandPresence";
import DirectCommunication from "@/components/DirectCommunication/DirectCommunication";
import EnhancedMarketing from "@/components/EnhancedMarketing/EnhancedMarketing";
import HigherMargins from "@/components/HigherMargins/HigherMargins";
import LongTermRelationships from "@/components/LongTermRelationships/LongTermRelationships";
import PageIntro from "@/components/PageIntro/PageIntro";
import ScrollHorizontalText from "@/components/ScrollHorizontalText/ScrollHorizontalText";

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
      <ScrollHorizontalText />
      <BenefitsIntro />
      <HigherMargins />
      <BrandPresence />
      <DirectCommunication />
      <EnhancedMarketing />
      <LongTermRelationships />
    </>
  );
};
export default page;
