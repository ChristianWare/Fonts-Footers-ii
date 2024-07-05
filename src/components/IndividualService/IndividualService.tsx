import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualService.module.css";
import Talk from "../../../public/icons/talk.svg";
import Booking from "../../../public/icons/booking.svg";
import Payment from "../../../public/icons/payment.svg";
import Map from "../../../public/icons/map.svg";
import User from "../../../public/icons/dashboard.svg";
import Cog from "../../../public/icons/cog.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Analytics from "../../../public/icons/analytics.svg";
import Button from "../Button/Button";

const IndividualService = () => {
  const individulaFeatures = [
    {
      icon: <Payment width={150} height={150} className={styles.icon} />,
      title: "Landing Pages",
      description:
        "Integrating Stripe as your payment gateway for your property ensures secure transactions, supports multiple payment methods, automates payments, expands global reach, provides real-time reporting, offers easy integration, enhances the guest experience, and ensures compliance, all contributing to the success and efficiency of your vacation rental business.",
      whyImportant: [
        {
          title: "Secure Transactions",
          modal:
            "Stripe provides a secure platform for processing payments, ensuring that transactions are safe and protected against fraud.",
        },
        {
          title: "Multiple Payment Methods",
          modal:
            "Guests can pay using various payment methods, including credit/debit cards, digital wallets, and bank transfers, accommodating different guest preferences.",
        },
        {
          title: "Global Reach",
          modal:
            "Stripe supports international payments, allowing you to accept payments from guests worldwide and expand your customer base.",
        },
        {
          title: "Real-Time Reporting",
          modal:
            "You can access real-time payment reports, analytics, and insights through the Stripe dashboard, helping you track revenue, monitor transactions, and make data-driven decisions.",
        },
      ],
    },
    {
      icon: <Booking width={150} height={150} className={styles.icon} />,
      title: "E-Commerce Stores",
      description:
        "Integrating a booking engine for your properties enables direct bookings, control over pricing and availability, enhances guest experience, allows customization and personalization, provides valuable data insights, streamlines operations, boosts revenue and occupancy, and builds brand loyalty and trust.",
      whyImportant: [
        {
          title: "Control over Pricing and Availability",
          modal:
            "With a booking engine, you have full control over pricing, availability, and booking policies. You can set dynamic pricing strategies, offer discounts or promotions, and adjust availability in real-time based on demand and seasonality.",
        },
        {
          title: "Enhanced Guest Experience",
          modal:
            "Providing a seamless and intuitive booking process through a booking engine enhances the guest experience. Guests can easily check availability, select dates, view property details, and complete bookings without navigating away from your website.",
        },
        {
          title: "Customization and Personalization",
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
      icon: <Talk width={150} height={150} className={styles.icon} />,
      title: "Business Websites",
      description:
        "Guest reviews on your direct booking website enhance transparency, build trust, provide valuable feedback for improvement, manage reputation, serve as social proof, offer SEO benefits, and ultimately increase bookings and occupancy rates for your property.",
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
      icon: <Map width={150} height={150} className={styles.icon} />,
      title: "Booking Platforms",
      description:
        "Adding an interactive map feature for your properties enhances the user experience by providing visual representation, improving decision-making, increasing engagement, differentiating your listings, enhancing marketing efforts, and ultimately boosting guest satisfaction and bookings.",
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
    {
      icon: <User width={150} height={150} className={styles.icon} />,
      title: "Search Engine Optimization",
      description:
        "Adding a user dashboard for your property provides guests with a personalized and convenient experience, allowing them to manage bookings, update profiles, communicate efficiently, leave feedback, access information, enjoy special offers, and receive support—all contributing to enhanced guest satisfaction and loyalty.",
      whyImportant: [
        {
          title: "Personalized Experience",
          modal:
            "Guests can manage their bookings, preferences, and communication preferences, creating a personalized experience",
        },
        {
          title: "Booking Management",
          modal:
            "Guests can view past and upcoming bookings, make changes, and access booking details conveniently in one place.",
        },
        {
          title: "Profile Updates",
          modal:
            "Users can update their profiles, contact information, and preferences, ensuring accurate and relevant communication.",
        },
        {
          title: "Support and Assistance",
          modal:
            "Users can access support, FAQs, and assistance if they encounter any issues during their stay, improving satisfaction and resolving concerns promptly.",
        },
      ],
    },
  ] as const;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        {individulaFeatures.map((x, index) => (
          <div key={index}>
            <div className={styles.content}>
              <div className={styles.left}>
                <h2 className={styles.titleMobile}>{x.title}</h2>
                <div className={styles.iconContainer}>{x.icon}</div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.title}>{x.title}</h2>
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
                <div className={styles.btnContainer}>
                  <Button btnType='primary' text='Learn more' href='/' arrow />
                  <Button
                    btnType='secondary'
                    text='Contact Us'
                    href='/'
                    arrow
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </LayoutWrapper>
    </section>
  );
};
export default IndividualService;
