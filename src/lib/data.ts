import Calendar from "../../public/icons/calendar.png";
import Next from "../../public/icons/nextjs.png";
import Mongo from "../../public/icons/mongodb.png";
import Cloudinary from "../../public/icons/cloudinary.png";
import NextAuth from "../../public/icons/nextAuth.png";
import Node from "../../public/icons/nodejs.png";
import Stripe from "../../public/icons/stripe.png";
import Vercel from "../../public/icons/vercel.png";
import Google from "../../public/icons/google.png";
import Booking from "../../public/icons/booking.png";
import Profile from "../../public/icons/profile.png";
import Reviews2 from "../../public/icons/reviews2.png";
import Admin4 from "../../public/icons/Admin4.png";
import CC from "../../public/icons/cc.png";
import Responsive from "../../public/icons/responsive.png";
import Accessibility from "../../public/icons/accessibility.png";
import SEO from "../../public/icons/seo.png";
import Page from "../../public/icons/page.png";
import Blog from "../../public/icons/blog.png";
import Sitemap from "../../public/icons/sitemap.png";
import Social from "../../public/icons/social.png";
import Index from "../../public/icons/index.png";
import Diverse from "../../public/icons/diverse.png";
import Fee from "../../public/icons/fee.png";
import Data from "../../public/icons/data.png";
import Client from "../../public/icons/client.png";
import Innovation from "../../public/icons/innovation.png";
import Elite from "../../public/images/elite.png";
import House from "../../public/icons/house.svg";

export const benefits = [
  {
    heading: "Lower Fees",
    description:
      "Airbnb and VRBO charge hosts various fees, including service fees, host fees, and payment processing fees. These can significantly eat into your profits. With your own website, you can avoid or minimize these fees",
  },
  {
    heading: "Greater Control",
    description:
      "When you have your own website, you have full control over your property listings, pricing, and booking policies. You can set your own rules and policies without being subject to the platforms' terms and conditions.",
  },
  {
    heading: "No Competing Listings",
    description:
      "On third-party platforms, your property is often listed alongside numerous competing properties, making it harder to stand out. On your website, you can focus solely on your property, giving it the undivided attention it deserves.",
  },
  {
    heading: "Diversification",
    description:
      "Relying solely on Airbnb and VRBO can be risky, as their policies and algorithms can change at any time. Having your own website provides a level of diversification and independence.",
  },
  {
    heading: "Long-Term Cost Savings",
    description:
      "While building and maintaining a website may involve an initial investment, it can save you money in the long run compared to paying ongoing fees to third-party platforms.",
  },
  {
    heading: "Data Ownership",
    description:
      "When you use Airbnb and VRBO, they own and control the guest data. With your own website, you own and control this valuable information, allowing you to build a list of past guests for marketing purposes.",
  },
] as const;

export const features = [
  {
    service: "Booking Engine",
    description:
      "Implement a user-friendly booking system that allows guests to check availability, select dates, and make reservations directly on your site.",
    icon: Calendar,
  },
  {
    service: "Guest Reviews",
    description:
      "Showcase positive reviews and testimonials from previous guests to build trust and credibility. Visitors will only be able to review once they've booked a stay on your property.",
    icon: Reviews2,
  },
  {
    service: "Admin Panel",
    description:
      "Admin panel will allow you to create, update, and delete listings on your personalized booking websites. View the number of bookings, and make any updates as needed.",
    icon: Admin4,
  },
  {
    service: "Payment Processing",
    description:
      "Stripe payment processing enables secure online transactions, integrating a trusted payment gateway for businesses to accept credit card payments.",
    icon: CC,
  },
  {
    service: "Mobile Resposive",
    description:
      "Designed to adapt and display optimally on various devices and screen sizes, providing an optimal user experience by adjusting its layout and content dynamically.",
    icon: Responsive,
  },
  {
    service: "Accessible",
    description:
      "Ensures that people with disabilities can perceive, understand, navigate, and interact with its content, features, and functionalities effectively.",
    icon: Accessibility,
  },
  {
    service: "Search Engine Optomization",
    description:
      "A search engine optimized website is configured to enhance its visibility and ranking on search engine results pages.",
    icon: SEO,
  },
  {
    service: "Page Speed Optmization",
    description:
      "Ensure that webite pages load quickly and efficiently and has fast loading times for its pages and content, improving user experience search engine rankings.",
    icon: Page,
  },
  {
    service: "Blog Articles",
    description:
      "Blog articles enhance website visibility by providing fresh, relevant, and keyword-rich content that boosts organic search rankings, and engages potential clients.",
    icon: Blog,
  },
  {
    service: "Site Map",
    description:
      "Site maps increase website visibility by helping search engines to understand the site's structure, improving rankings and ensuring that all pages are easily accessible.",
    icon: Sitemap,
  },
  {
    service: "Social Media Intergration",
    description:
      "Enhances website visibility by connecting your website to social platforms, enabling easy sharing of content, ultimately expanding the online reach of your business.",
    icon: Social,
  },
  {
    service: "Google Indexing",
    description:
      "Allows google to crawl and analyze the content of your website, and then indexes it in its database, ensuring that your website is eligible to appear in Google search results.",
    icon: Index,
  },
] as const;

export const process = [
  {
    id: 58,
    processName: "",
    processDescription: "",
    icon: true,
  },
  {
    id: 59,
    processName: "Initial Consultation",
    processDescription:
      "We arrange a Zoom meeting to discuss your vacation rental needs, gather information, and send a tailored service contract afterward.",
    icon: false,
  },
  {
    id: 60,
    processName: "Onboarding",
    processDescription:
      "Once the Contract is signed and returned, you gain access to the client dashboard. Here, you complete a detailed questionnaire to inform our copywriting process.",
    icon: false,
  },
  {
    id: 61,
    processName: "Design & Development",
    processDescription:
      "Choose from five designs for your website, then track progress with a temporary link, ensuring a flawless, responsive design with captivating details and animations.",
    icon: false,
  },
  {
    id: 62,
    processName: "Deployment and Going Live",
    processDescription:
      "Once your website meets approval, we'll deploy your booking application globally and provide a brief training session on using the dashboard.",
    icon: false,
  },
  {
    id: 63,
    processName: "",
    processDescription: "",
    icon: true,
  },
] as const;

export const pricing = [
  {
    id: 26,
    plan: "Basic",
    for: "Your Direct Booking Starting Point",
    description:
      "Ideal for individual owners with one property who are looking to get started.",
    price: 175,
    includes: [
      {
        id: 26.1,
        feature: "5 page website",
      },
      {
        id: 26.2,
        feature: "Hosting",
      },
      {
        id: 26.3,
        feature: "SEO",
      },
      {
        id: 27.3,
        feature: "Payment Processing",
      },
      {
        id: 27.5,
        feature: "12 Blog Articles",
      },
    ],
    btnType: "primary",
  },
  {
    id: 27,
    plan: "Advanced",
    for: "Advanced Savings & Strategy",
    description:
      "Perfect for growing businesses with 2 to 9 properties that need additional features.",
    price: 249,
    includes: [
      {
        id: 26.1,
        feature: "Everything in Starter, plus:",
      },
      {
        id: 26.3,
        feature: "Analytics and Reporting",
      },
      {
        id: 27.3,
        feature: "Dynamic Pricing Engine",
      },
      {
        id: 27.4,
        feature: "Customer Support Enhancements",
      },
      {
        id: 27.6,
        feature: "24 Blog Articles",
      },
    ],
    btnType: "secondary",
  },
  {
    id: 28,
    plan: "Enterprise",
    for: "All-Inclusive Direct Booking Suite",
    description:
      "For large-scale organizations with at least 10 or more rental properties.",
    price: "349",
    includes: [
      {
        id: 28.1,
        feature: "Everything in Advanced, plus:",
      },
      {
        id: 28.2,
        feature: "Geographical Expansion",
      },
      {
        id: 28.3,
        feature: "Enterprise-Level Scalability",
      },
      {
        id: 28.3,
        feature: "Advanced SEO Services",
      },
      {
        id: 28.5,
        feature: "Unlimited Blog Articles",
      },
    ],
    btnType: "tertiary",
  },
] as const;
