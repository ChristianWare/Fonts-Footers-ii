"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./BusinessFeatures.module.css";
import Hexagon from "../../../public/icons/hexagon.svg";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import LeadGeneration from "../../../public/icons/lead.svg";
import Social from "../../../public/icons/social.svg";
import Multiple from "../../../public/icons/multiple.svg";

const BusinessFeatures = () => {
  const businessWebsiteFeatures = [
    {
      icon: <Design width={150} height={150} className={styles.icon} />,
      title: "Custom Website Design",
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
      icon: <Hexagon width={150} height={150} className={styles.icon} />,
      title: "Branding and Visual Identity",
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
      icon: <SEO width={150} height={150} className={styles.icon} />,
      title: "Search Engine Optimization (SEO)",
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
    {
      icon: <LeadGeneration width={150} height={150} className={styles.icon} />,
      title: "Contact and Lead Generation",
      description:
        "We design websites that not only inform but also convert visitors into leads, helping you grow your business.",
      whyImportant: [
        {
          title: "Contact Forms",
        },
        {
          title: "Call-to-Action Buttons",
        },
        {
          title: "Landing Pages",
        },
        {
          title: "Live Chat Integration",
        },
      ],
    },
    {
      icon: <Multiple width={150} height={150} className={styles.icon} />,
      title: "Multiple Pages Management",
      description:
        "Our business websites have multiple pages, allowing your content to be easily organized across various sections of your site.",
      whyImportant: [
        {
          title: "Easy Page Addition",
        },
        {
          title: "Consistent Navigation",
        },
        {
          title: "SEO Optimization",
        },
        {
          title: "Content Organization",
        },
      ],
    },
    {
      icon: <Social width={150} height={150} className={styles.icon} />,
      title: "Social Media Integration",
      description:
        "We integrate your website with various social media platforms to enhance your online presence and engage with your audience.",
      whyImportant: [
        {
          title: "Increased Visibility",
        },
        {
          title: "Enhanced Engagement",
        },
        {
          title: "Content Sharing",
        },
        {
          title: "Brand Consistency",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          Core Features of our Business Websites
        </h2>
        <div className={styles.dataContainer}>
          {businessWebsiteFeatures.map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  <div className={styles.iconContainer}>{x.icon}</div>
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

export default BusinessFeatures;
