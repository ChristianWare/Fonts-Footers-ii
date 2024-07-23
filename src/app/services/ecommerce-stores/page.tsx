import EcommHero from "@/components/EcommHero/EcommHero";
import EcommIntegrations from "@/components/EcommIntegrations/EcommIntegrations";
import EcommOverview from "@/components/EcommOverview/EcommOverview";
import MPSection1 from "@/components/MPSection1/MPSection1";

export default function EcommerceStoresPage() {
  return (
    <main>
      <EcommHero />
      <EcommOverview />
      <MPSection1 />
      <EcommIntegrations />
    </main>
  );
}
