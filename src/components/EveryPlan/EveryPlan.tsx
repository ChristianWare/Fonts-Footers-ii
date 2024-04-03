import LayoutWrapper from "../LayoutWrapper";
import styles from "./EveryPlan.module.css";
import House from "../../../public/icons/house.svg";
import Button from "../Button/Button";

const EveryPlan = () => {
  const data = [
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Hosting",
      description:
        "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Unlimited Edits",
      description:
        "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "24/7 Support",
      description:
        "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Web Design/Development",
      description:
        "We design and develop each website we build with pure code to ensure that your website is fast and ranks high on google serch results.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Citations & Listings",
      description:
        "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Google Analytics",
      description:
        "We will set up your google analytics account so that you dont have to. Focus on your business, and we will take care of the technical stuff.",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Every Plan comes with...</h2>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
        {/* <div className={styles.btnContainer}>
          <Button
            text='See All Features'
            href='/pricing'
            btnType='primary'
            arrow
          />
        </div> */}
      </LayoutWrapper>
    </section>
  );
};
export default EveryPlan;
