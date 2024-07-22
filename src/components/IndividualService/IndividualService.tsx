import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualService.module.css";
import Booking from "../../../public/icons/booking.svg";
import Business from "../../../public/icons/business.svg";
import Landing from "../../../public/icons/landing.svg";
import Cart from "../../../public/icons/cart.svg";
import Link from "next/link";
import Button from "../Button/Button";

const IndividualService = () => {
  const individulaFeatures = [
    // {
    //   icon: <Landing width={75} height={75} className={styles.icon} />,
    //   title: "Landing Pages",
    //   description:
    //     "Integrating Stripe as your payment gateway for your property ensures secure transactions, supports multiple payment methods, automates payments, expands global reach, provides real-time reporting, offers easy integration, enhances the guest experience, and ensures compliance, all contributing to the success and efficiency of your vacation rental business.",
    //   href: "/landing-pages",
    //   whyImportant: [
    //     {
    //       title: "Secure Transactions",
    //       modal:
    //         "Stripe provides a secure platform for processing payments, ensuring that transactions are safe and protected against fraud.",
    //     },
    //     {
    //       title: "Payment Methods",
    //       modal:
    //         "Guests can pay using various payment methods, including credit/debit cards, digital wallets, and bank transfers, accommodating different guest preferences.",
    //     },
    //     {
    //       title: "Global Reach",
    //       modal:
    //         "Stripe supports international payments, allowing you to accept payments from guests worldwide and expand your customer base.",
    //     },
    //     {
    //       title: "Live Reporting",
    //       modal:
    //         "You can access real-time payment reports, analytics, and insights through the Stripe dashboard, helping you track revenue, monitor transactions, and make data-driven decisions.",
    //     },
    //   ],
    // },
    {
      icon: <Cart width={75} height={75} className={styles.icon} />,
      title: "E-Commerce Stores",
      description:
        "Integrating a booking engine for your properties enables direct bookings, control over pricing and availability, enhances guest experience, allows customization and personalization, provides valuable data insights, streamlines operations, boosts revenue and occupancy, and builds brand loyalty and trust.",
      href: "services/ecommerce-stores",
      whyImportant: [
        {
          title: "Control",
          modal:
            "With a booking engine, you have full control over pricing, availability, and booking policies. You can set dynamic pricing strategies, offer discounts or promotions, and adjust availability in real-time based on demand and seasonality.",
        },
        {
          title: "Guest Experience",
          modal:
            "Providing a seamless and intuitive booking process through a booking engine enhances the guest experience. Guests can easily check availability, select dates, view property details, and complete bookings without navigating away from your website.",
        },
        {
          title: "Customization",
          modal:
            "A booking engine allows for customization and personalization of the booking experience. You can tailor the booking process to match your brand's aesthetics, incorporate upselling opportunities, and collect guest preferences for personalized recommendations.",
        },
        {
          title: "Streamlined Operations",
          modal:
            "Automating the booking process through a booking engine streamlines operations. It reduces manual tasks, such as processing bookings via phone or email, and minimizes the risk of overbooking or double bookings with real-time inventory management.",
        },
      ],
    },
    {
      icon: <Business width={75} height={75} className={styles.icon} />,
      title: "Business Websites",
      description:
        "Guest reviews on your direct booking website enhance transparency, build trust, provide valuable feedback for improvement, manage reputation, serve as social proof, offer SEO benefits, and ultimately increase bookings and occupancy rates for your property.",
      href: "services/business-websites",
      whyImportant: [
        {
          title: "Transparency",
          modal:
            "Guest reviews provide transparency and authenticity, helping potential guests make informed decisions about booking your property.",
        },
        {
          title: "Trust Building",
          modal:
            "Positive reviews build trust among potential guests, reassuring them about the quality of your property and services.",
        },
        {
          title: "Feedback and Improvement",
          modal:
            "Guest reviews provide valuable feedback that can help you identify areas for improvement and enhance the overall guest experience.",
        },
        {
          title: "Reputation Management",
          modal:
            "Managing guest reviews allows you to respond to feedback, address concerns, and showcase your commitment to guest satisfaction, enhancing your reputation.",
        },
      ],
    },
    {
      icon: <Booking width={75} height={75} className={styles.icon} />,
      title: "Booking Platforms",
      description:
        "Adding an interactive map feature for your properties enhances the user experience by providing visual representation, improving decision-making, increasing engagement, differentiating your listings, enhancing marketing efforts, and ultimately boosting guest satisfaction and bookings.",
      href: "services/booking-platforms",
      whyImportant: [
        {
          title: "Visual Representation",
          modal:
            " It provides a visual representation of property locations, nearby attractions, and amenities, making it easier for guests to understand the property's surroundings and plan their stay accordingly.",
        },
        {
          title: "Improved Decision Making",
          modal:
            "Guests can assess the proximity of your properties to key destinations such as beaches, restaurants, shopping areas, and transportation hubs, helping them make informed booking decisions that align with their preferences and itinerary.",
        },
        {
          title: "Increased Engagement",
          modal:
            "The interactive map feature increases user engagement on your website as guests interact with the map to discover nearby amenities, attractions, and points of interest, keeping them engaged and informed throughout their booking journey.",
        },
        {
          title: "Enhanced Marketing",
          modal:
            "The interactive map can be leveraged as a marketing tool to highlight the unique selling points of your properties, such as proximity to popular tourist spots, scenic views, or exclusive access to amenities, attracting more bookings and inquiries.",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <h2 className={styles.heading}>What we build</h2>
        <div className={styles.parent}>
          {individulaFeatures.map((x, index) => (
            <div key={index} className={styles.content}>
              <Link href={x.href}>
                <div className={styles.left}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.copy}>~Click to Learn More ~</p>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
              </Link>
              <div className={styles.right}>
                <p className={styles.desc}>{x.description}</p>
                <br />

                <span className={styles.span}>Benefits:</span>
                <ul className={styles.box}>
                  {x.whyImportant.map((y, index) => (
                    <li key={index} className={styles.reasonTitleContainer}>
                      <p className={styles.reasonTitle}>{y.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default IndividualService;
