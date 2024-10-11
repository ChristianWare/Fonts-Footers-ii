"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicePreview.module.css";
import Image from "next/image";
import Ecomm from "../../../public/images/ecomm.png";
import Business from "../../../public/images/business.png";
import Booking from "../../../public/images/bookingii.png";
import ServicesSectionii from "../ServicesSectionii/ServicesSectionii";

const ServicePreview = () => {
  const businessWebsiteFeatures = [
    {
      icon: Ecomm,
      title: "E-Commerce Stores",
      description:
        "Our e-commerce platforms grow with your business, ensuring you can add new features and handle increased traffic as needed.",
      whyImportant: [
        {
          title: "Platform Integration",
        },
        {
          title: "Custom Website Design",
        },
        {
          title: "Stripe Payment Gateway",
        },
        {
          title: "Multiple Product Management",
        },
      ],
    },
    {
      icon: Business,
      title: "Business Websites",
      description:
        "We build professional business websites to elevate your online presence.",
      whyImportant: [
        {
          title: "Custom Website Design",
        },
        {
          title: "Branding and Visual Identity",
        },
        {
          title: "Contact and Lead Generation",
        },
        {
          title: "Search Engine Optimization",
        },
      ],
    },

    {
      icon: Booking,
      title: "Booking Platforms",
      description:
        "We develop custom booking systems that cater to the unique needs of your business, ensuring a smooth and hassle-free reservation process for your clients.",
      whyImportant: [
        {
          title: "Booking Engine",
        },
        {
          title: "Guest Reviews",
        },
        {
          title: "Interactive Map",
        },
        {
          title: "Admin Dashboard",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='services'>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          <span className={styles.em1}>Services:</span> <br /> What we can build{" "}
          <span className={styles.em}>for you</span>
        </h2>
        <div className={styles.dataContainer}>
          {businessWebsiteFeatures.map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.icon}
                      alt='image'
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  <span className={styles.span}>Benefits:</span>
                  <ul className={styles.box}>
                    {x.whyImportant.map((y, index) => (
                      <li key={index}>
                        <h4 className={styles.reasonnTitle}>{y.title}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ServicesSectionii />
      </LayoutWrapper>
    </section>
  );
};

export default ServicePreview;
