"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicePreview.module.css";
import Image from "next/image";
import Ecomm from "../../../public/images/ecomm.png";
import Business from "../../../public/images/business.png";
import Booking from "../../../public/images/bookingii.png";

const ServicePreview = () => {
  const businessWebsiteFeatures = [
    {
      icon: Ecomm,
      title: "E-Commerce Stores",
      description:
        "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience.",
      whyImportant: [
        {
          title: "Unique Design",
        },
        {
          title: "User-Centered Approach",
        },
        {
          title: "Responsive Layouts",
        },
        {
          title: "Fast Loading Speeds",
        },
      ],
    },
    {
      icon: Business,
      title: "Business Websites",
      description:
        "We help strengthen your brand’s visual identity by creating cohesive and attractive designs that leave a lasting impression on your audience.",
      whyImportant: [
        {
          title: "Logo Design",
        },
        {
          title: "Color Schemes",
        },
        {
          title: "Typography",
        },
        {
          title: "Imagery and Graphics",
        },
      ],
    },

    {
      icon: Booking,
      title: "Booking Platforms",
      description:
        "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results, driving organic traffic to your site.",
      whyImportant: [
        {
          title: "On-Page SEO",
        },
        {
          title: "Keyword Research",
        },
        {
          title: "Performance Monitoring",
        },
        {
          title: "Link Building",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          <span className={styles.em1}>Services:</span> <br /> What we can build{" "}
          <br />
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
      </LayoutWrapper>
    </section>
  );
};

export default ServicePreview;
