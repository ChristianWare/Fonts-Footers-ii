import AboutGrid from "@/components/AboutGrid/AboutGrid";
import PageIntro from "@/components/PageIntro/PageIntro";

const page = () => {
  return (
    <>
      <PageIntro
        text='About'
        span='Fonts & Footers'
        copy="We're on a mission to redefine the vacation rental experience by empowering property owners to seize control of their bookings. Discover the narrative behind our commitment to personalized, direct booking websites and join us in transforming the way you connect with your guests."
      />
      <AboutGrid />
    </>
  );
};
export default page;
