import LayoutWrapper from "../LayoutWrapper";
import styles from "./Challenges.module.css";
import Algorithm from "../../../public/icons/algorithm.svg";
import Brand from "../../../public/icons/brand.svg";
import Crowd from "../../../public/icons/crowd.svg";
import Fees from "../../../public/icons/fees.svg";

const Challenges = () => {
  const data = [
    {
      title: "Dependence on OTAs and their unpredictable algorithms",
      description:
        "This can leave businesses vulnerable to sudden changes in visibility and booking opportunities. Diversifying marketing strategies and investing in a direct booking website can help mitigate the risks associated with OTA dependency.",
      icon: <Algorithm width={75} height={75} />,
    },
    {
      title: "High commission fees eating into your profits",
      description:
        "High commission fees from third-party platforms can significantly diminish your profits. Exploring alternative distribution channels and optimizing direct bookings can help maximize your revenue potential.",
      icon: <Fees width={75} height={75} />,
    },
    {
      title: "Lack of control over your bookings and brand",
      description:
        "Struggling with limited control over bookings and brand representation can hinder business autonomy. Investing in a robust booking management system and prioritizing direct customer interactions can enhance control and brand consistency.",
      icon: <Brand width={75} height={75} />,
    },
    {
      title: "Difficulty standing out in a saturated market",
      description:
        "Facing challenges in standing out amidst a saturated market can hinder business growth. Implementing unique branding strategies and emphasizing distinctive value propositions can help overcome this obstacle.",
      icon: <Crowd width={75} height={75} />,
    },
  ];
  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Do you encounter these challenges?</h2>
          <p className={styles.copy}>
            As a short-term rental owner, you may be experiencing these common
            issues:
          </p>
        </div>
        <div className={styles.middle}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
              {x.icon}
              <h3 className={styles.title}>{x.title}</h3>
            </div>
          ))}
        </div>
        {/* <div className={styles.bottom}>
          <p className={styles.copyBottom}>
            Embrace the freedom of direct bookings, take control of your brand,
            and let&apos;s transform these challenges into opportunities
            together.
          </p>
        </div> */}
      </div>
    </LayoutWrapper>
  );
};
export default Challenges;
