import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../../public/images/house23.png";

export default function BlogPage() {
  return (
    <>
      <PageIntro text='Our Blog' src={Img} copy='' span='blog' />
    </>
  );
}
