import styles from "./Slider.module.css";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Analytics from "../../../public/icons/analytics.svg";
import Payment from "../../../public/icons/payment.svg";
import Hexagon from "../../../public/icons/hexagon.svg";
import Social from "../../../public/icons/social.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Cart from "../../../public/icons/cart.svg";
import Booking from "../../../public/icons/booking.svg";
import Business from "../../../public/icons/business.svg";
import Check from "../../../public/icons/check.svg";
import Clock from "../../../public/icons/Clock.svg";
import Cog from "../../../public/icons/cog.svg";
import House from "../../../public/icons/house.svg";
import Crowd from "../../../public/icons/crowd.svg";

const Slider = () => {
  const logos = [
    { logo: <SEO className={styles.logo} />, position: 1 },
    { logo: <Design className={styles.logo} />, position: 2 },
    { logo: <Analytics className={styles.logo} />, position: 3 },
    { logo: <Payment className={styles.logo} />, position: 4 },
    { logo: <Hexagon className={styles.logo} />, position: 5 },
    { logo: <Social className={styles.logo} />, position: 6 },
    { logo: <Multiple className={styles.logo} />, position: 7 },
    { logo: <Cart className={styles.logo} />, position: 8 },
    { logo: <Booking className={styles.logo} />, position: 9 },
    { logo: <Business className={styles.logo} />, position: 10 },
    { logo: <Check className={styles.logo} />, position: 11 },
    { logo: <Clock className={styles.logo} />, position: 12 },
    { logo: <Cog className={styles.logo} />, position: 13 },
    { logo: <House className={styles.logo} />, position: 14 },
    { logo: <Crowd className={styles.logo} />, position: 15 },
    { logo: <SEO className={styles.logo} />, position: 16 },
    { logo: <Design className={styles.logo} />, position: 17 },
    { logo: <Analytics className={styles.logo} />, position: 18 },
    { logo: <Payment className={styles.logo} />, position: 19 },
    { logo: <Hexagon className={styles.logo} />, position: 20 },
    // { logo: <Logo1 className={styles.logo} />, position: 1 },
    // { logo: <Logo2 className={styles.logo} />, position: 2 },
    // { logo: <Logo3 className={styles.logo} />, position: 3 },
    // { logo: <Logo4 className={styles.logo} />, position: 4 },
    // { logo: <Logo5 className={styles.logo} />, position: 5 },
    // { logo: <Logo6 className={styles.logo} />, position: 6 },
    // { logo: <Logo7 className={styles.logo} />, position: 7 },
    // { logo: <Logo8 className={styles.logo} />, position: 8 },
    // { logo: <Logo9 className={styles.logo} />, position: 9 },
    // { logo: <Logo10 className={styles.logo} />, position: 10 },
    // { logo: <Logo1 className={styles.logo} />, position: 11 },
    // { logo: <Logo2 className={styles.logo} />, position: 12 },
    // { logo: <Logo3 className={styles.logo} />, position: 13 },
    // { logo: <Logo4 className={styles.logo} />, position: 14 },
    // { logo: <Logo5 className={styles.logo} />, position: 15 },
    // { logo: <Logo6 className={styles.logo} />, position: 16 },
    // { logo: <Logo7 className={styles.logo} />, position: 17 },
    // { logo: <Logo8 className={styles.logo} />, position: 18 },
    // { logo: <Logo9 className={styles.logo} />, position: 19 },
    // { logo: <Logo10 className={styles.logo} />, position: 20 },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...logos, ...logos].map((x, index) => (
          <div key={index} className={styles.item}>
            {x.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
