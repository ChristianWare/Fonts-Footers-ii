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
import Project1 from "../../public/images/img1.jpg";

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
      "Your admin panel will allow you to create, update, and delete listings on your personalized booking websites. View the number of bookings, and make any updates as needed.",
    icon: Admin4,
  },
  {
    service: "Payment Processing",
    description:
      "We use Stripe payment processing so that you'll be able to secure online transactions, integrating a trusted payment gateway for businesses to accept credit card payments.",
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
    prices: [
      {
        id: 1,
        price: "175 / month",
      },
      {
        id: 2,
        price: "1,680 / Year",
      },
    ],
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
    prices: [
      {
        id: 1,
        price: "175 / Month",
      },
      {
        id: 2,
        price: "1,680 / Year",
      },
    ],
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
    prices: [
      {
        id: 1,
        price: "175 / Month",
      },
      {
        id: 2,
        price: "1,680 / Year",
      },
    ],
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

export const projects = [
  {
    src: Project1,
    title: "Taco Bell Redesign",
    description:
      "This project is a redesign of Taco Bell's website. The front end was built with next.js, and the CMS is Sanity.io. The styling was done with CSS Modules so that I can have the most flexibility for design. Each menu item has its slug page where more details are given on that particular item.",
    client:
      "This client is in the hospitality industry and they recently purchased an investment property for short term rental. They needed a website to perfectly reflect their online brand and allow their guests to easily book future stays.",
    href: "https://www.livemas.dev/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
  },
] as const;

export const faqs = [
  {
    id: 36,
    question: "Why should I use a direct booking website instead of Airbnb?",
    answer:
      "Direct booking websites offer more control over your property, lower fees, and personalized branding. You have direct communication with guests and can build a loyal customer base.",
  },
  {
    id: 36.1,
    question: "How does the booking process work on a direct booking website?",
    answer:
      "Guests can browse your property, view details, and make reservations directly through your website. You have the flexibility to set your own booking policies and payment processes.",
  },
  {
    id: 36.2,
    question: "What features can I customize on my direct booking website?",
    answer:
      "You can customize the website design, branding elements, property details, pricing, and policies. We offer flexibility to tailor the platform to your unique needs.",
  },
  {
    id: 36.3,
    question: "Is it easy for guests to find my direct booking website?",
    answer:
      "We implement SEO strategies to improve the visibility of your website on search engines. Additionally, we can assist with marketing strategies to drive traffic to your platform.",
  },
  {
    id: 36.4,
    question:
      "How do I manage bookings and communicate with guests on the platform?",
    answer:
      "We provide a user-friendly dashboard where you can manage bookings, communicate with guests, and access important information. Training is offered to ensure you can navigate the platform with ease.",
  },
  {
    id: 36.5,
    question:
      "Can I integrate the direct booking website with my existing property management system (PMS)?",
    answer:
      "Depending on your PMS, integration may be possible. We'll assess compatibility and work towards seamless integration to streamline your management processes.",
  },
  {
    id: 37,
    question: "How long does it typically take to build a website?",
    answer:
      "The timeline can vary based on the complexity of the project. On average, a small business website takes around 2 to 4 weeks from initial concept to launch.",
  },
  {
    id: 42,
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and functioning optimally after launch.",
  },
  {
    id: 46,
    question:
      "Can you assist with transferring my existing domain name to your hosting service?",
    answer:
      "Absolutely, we can guide you through the process of transferring your domain name to our hosting service. We'll ensure a smooth transition so that your website remains accessible with minimal downtime during the switch.",
  },
];

export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/",
  },
  {
    id: 6,
    heading: "About",
    href: "/about",
  },
  {
    id: 11,
    heading: "Features",
    href: "/features",
  },
  {
    id: 16,
    heading: "Contact",
    href: "/contact",
  },
  {
    id: 17,
    heading: "Blog",
    href: "/blog",
  },
] as const;

export const reviews = [
  {
    id: 71,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 72,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 73,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 74,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 75,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 76,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 77,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 78,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 79,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 80,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
  {
    id: 81,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati, repudiandae nisi veniam dicta repellat quos temporibus assumenda eaque qui similique fugit reprehenderit alias necessitatibus natus, explicabo nostrum dignissimos distinctio!",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
  },
] as const;
