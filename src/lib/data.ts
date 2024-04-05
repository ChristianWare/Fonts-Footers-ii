import Calendar from "../../public/icons/calendar.png";
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

import Project1 from "../../public/images/img1.jpg";

export const benefits = [
  {
    heading: "Lower Fees",
    description:
      "OTA's charge hosts various fees, including service fees, host fees, and payment processing fees. These can significantly eat into your profits. With your own website, you can avoid or minimize these fees.",
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
      "We arrange a Zoom meeting to discuss your business needs, gather information, and send a tailored service contract afterward.",
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
      "Once your website meets approval, we'll deploy your booking application globally and provide a brief training session on using the dashboard.",
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
    for: "1 to 5 Properties",
    description:
      "Ideal for individual owners with 1 to 5 properties who are looking to get started.",
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
    for: "6 to 10 properties",
    description:
      "For growing businesses with 6 to 10 properties that need additional features.",
    prices: [
      {
        id: 1,
        price: "250 / Month",
      },
      {
        id: 2,
        price: "2,400 / Year",
      },
    ],
    includes: [
      {
        id: 26.1,
        feature: "Everything in Basic, plus:",
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
    for: "11 or more Properties",
    description:
      "For large-scale organizations with at least 11 or more properties.",
    prices: [
      {
        id: 1,
        price: "350 / Month",
      },
      {
        id: 2,
        price: "3,360 / Year",
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
    question:
      "Why should I have my own website instead of relying on listing platforms like Airbnb?",
    answer:
      "This allows you to have more control over your property, lower fees, and personalized branding. You have direct communication with guests and can build a loyal customer base.",
  },
  {
    id: 36.1,
    question:
      "How do guests make reservations on a website that allows direct bookings?",
    answer:
      "Guests can browse your property, view details, and make reservations directly through your website. You have the flexibility to set your own booking policies and payment processes.",
  },
  {
    id: 36.2,
    question: "What customizbile features do you offer?",
    answer:
      "You can customize the website design, branding elements, property details, pricing, and policies. We offer flexibility to tailor the platform to your unique needs.",
  },
  {
    id: 36.3,
    question: "Will it be easy for guests to find my website?",
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

export const glossaryMenu = [
  {
    letter: "A",
    section: [
      {
        term: "Accommodation Types",
        description:
          "Different kinds of properties available for vacation rental.",
      },
      {
        term: "Advanced Pricing Strategies",
        description:
          "Using various kinds of data to implement dynamic pricing.",
      },
      {
        term: "API",
        description: "Application Programming Interface.",
      },
      {
        term: "Automated Guest Communication",
        description:
          "The use of email or messaging platforms to send messages to guests.",
      },
      {
        term: "Availability Calendar",
        description:
          "A visual representation of a vacation rental property's open dates for booking",
      },
    ],
  },
  {
    letter: "B",
    section: [
      {
        term: "Backup Booking System",
        description:
          "Alternative arrangements put in place by property owners in case of unexpected issues.",
      },
      {
        term: "Booking Confirmation",
        description:
          "Formal acknowledgment sent to guests after they make a reservation with you.",
      },
      {
        term: "Booking Engine",
        description:
          "Software that allows guests to book vacation rentals directly from the website.",
      },
      {
        term: "Booking Fee",
        description:
          "Fee charged to guests by vacation rental platforms for each booking.",
      },
      {
        term: "Brand Identity",
        description:
          "The visual and conceptual representation of a vacation rental brand.",
      },
      {
        term: "Business Intelligence",
        description:
          "The process of gathering and analyzing data to make informed business decisions.",
      },
    ],
  },
  {
    letter: "C",
    section: [
      {
        term: "Check-in Check-out Procedures",
        description:
          "Guidelines for guests to follow when arriving at/departing from a vacation rental property.",
      },
      {
        term: "Channel Manager",
        description:
          "Tool used for managing listings across multiple online platforms.",
      },
      {
        term: "CRM",
        description:
          "Customer Relationship Management - software systems for managing interactions with guests.",
      },
      {
        term: "Cleaning Standards",
        description:
          "Guidelines for maintaining cleanliness and hygiene in vacation rental properties.",
      },
      {
        term: "Cancellation Policies",
        description:
          "Outlines the terms and conditions for guest cancellations and refunds.",
      },
      {
        term: "Competitive Analysis",
        description:
          "Researching competitors in the vacation rental market to understand their strengths, weaknesses, and pricing strategies.",
      },
    ],
  },
  {
    letter: "D",
    section: [
      {
        term: "Dynamic Pricing",
        description:
          "A pricing strategy that adjusts rental rates based on demand, seasonality, and market trends.",
      },
      {
        term: "Direct Booking",
        description:
          "Allowing guests to book vacation rentals directly from the property owner or manager.",
      },
      {
        term: "Digital Key",
        description:
          "A virtual key that allows guests to access vacation rental properties using their smartphones.",
      },
      {
        term: "Data Analytics",
        description:
          "Using data to analyze guest behavior, market trends, and performance metrics in the vacation rental industry.",
      },
      {
        term: "Data Security",
        description:
          "Measures implemented to protect sensitive information related to any and all confidential data.",
      },
      {
        term: "Digital Marketing",
        description:
          "Encompasses strategies used to promote vacation rental properties online.",
      },
    ],
  },
  {
    letter: "E",
    section: [
      {
        term: "Enhanced Listing",
        description:
          "An optimized listing with attractive features, photos, and descriptions to attract more guests.",
      },
      {
        term: "Electronic Signature",
        description:
          "A digital signature used to sign rental agreements and other documents electronically.",
      },
      {
        term: "Escrow Service",
        description:
          "A secure payment service that holds funds until the rental transaction is completed.",
      },
      {
        term: "Experiential Marketing",
        description:
          "A marketing approach that focuses on creating memorable experiences for guests.",
      },
      {
        term: "Expense Tracking",
        description:
          "Monitoring and tracking expenses related to managing vacation rental properties.",
      },
      {
        term: "Email Marketing",
        description:
          "Using email campaigns to promote vacation rental properties, discounts, and special offers to potential guests.",
      },
      {
        term: "Extra Guest Fee",
        description:
          "Additional charges for accommodating more guests than the standard occupancy limit in vacation rental properties.",
      },
      {
        term: "Exit Cleaning",
        description:
          "Cleaning services provided after guests check out to prepare the vacation rental property for the next guests.",
      },
    ],
  },
  {
    letter: "F",
    section: [
      {
        term: "Flexible Booking Policies",
        description:
          "Accommodation options that offer guests more flexibility for reservations.",
      },
      {
        term: "Front Desk Services",
        description:
          "Services provided to guests at the front desk of vacation rental properties, including check-in, check-out, and assistance.",
      },
      {
        term: "Fraud Prevention",
        description:
          "Strategies and technologies implemented to protect vacation rental businesses and guests from fraudulent activities.",
      },
      {
        term: "Financial Reporting",
        description:
          "Generation of financial statements and reports related to vacation rental properties.",
      },
    ],
  },
  {
    letter: "G",
    section: [
      {
        term: "Guest Reviews",
        description:
          "Reviews, ratings, and comments provided by guests about their experience staying at a vacation rental property.",
      },
      {
        term: "GDS",
        description:
          "A Global Distribution System is a network enabling travel agents and online booking platforms to access and sell inventor.",
      },
      {
        term: "Guest Communication",
        description:
          "Communicating with guests before, during, and after their stay to provide information, answer questions, and address concerns.",
      },
      {
        term: "Guest Experience Management",
        description:
          "Managing and enhancing the overall experience for guests staying at vacation rental properties.",
      },
      {
        term: "Google Analytics",
        description:
          "Web analytics tool provided by Google that allows website owners to track and analyze visitor traffic.",
      },
      {
        term: "Guest Verification",
        description:
          "Process of verifying the identity and credentials of guests before confirming bookings.",
      },
    ],
  },
  {
    letter: "H",
    section: [
      {
        term: "Home Automation",
        description:
          "Automating tasks and controls within vacation rental properties using smart home technology.",
      },
      {
        term: "House Rules",
        description:
          "Rules established by property owners or managers for guests staying at vacation rental properties.",
      },
      {
        term: "High-Speed Internet",
        description:
          "Fast and reliable internet access provided to guests staying at vacation rental properties.",
      },
      {
        term: "Hospitality Services",
        description:
          "Amenities, services, and experiences provided to guests during their stay at a vacation rental property.",
      },
      {
        term: "Hospitality Management Software",
        description:
          "A tool used by vacation rental owners/managers to manage all aspects of property operations.",
      },
    ],
  },
  {
    letter: "I",
    section: [
      {
        term: "Instant Booking",
        description:
          "Allowing guests to book vacation rentals instantly without waiting for approval from the property owner or manager.",
      },
      {
        term: "Inventory Management",
        description:
          "Managing and tracking the availability and status of vacation rental properties and their amenities.",
      },
      {
        term: "Integration",
        description:
          "Combining different software systems, tools, or platforms to work together seamlessly.",
      },
      {
        term: "Insurance Coverage",
        description:
          "Policies that protect owners/managers against potential risks and liabilitie.",
      },
      {
        term: "Interactive Map",
        description:
          "Feature allowing guests to view the location of rental properties on a map interface.",
      },
      {
        term: "Integrated Payment Gateway",
        description:
          "Secure system that allows vacation rental websites to accept online payments from guests.",
      },
    ],
  },
  {
    letter: "J",
    section: [
      {
        term: "Junior Suite",
        description:
          "A smaller suite or room with additional amenities designed for younger guests or smaller groups.",
      },
      {
        term: "JV",
        description:
          "Joint Venture is a partnership between two or more entities to collaborate on a specific rental property.",
      },
    ],
  },
  {
    letter: "K",
    section: [
      {
        term: "Keyless Entry Systems",
        description:
          "Systems that allow guests to access vacation rental properties using digital codes without physical keys.",
      },
      {
        term: "Kitchenette",
        description:
          "A small kitchen area in vacation rental properties equipped with basic cooking facilities.",
      },
    ],
  },
  {
    letter: "L",
    section: [
      {
        term: "Landing Page",
        description:
          "A web page designed to capture visitor's attention and encourage them to take a specific action, such as booking a vacation rental.",
      },
      {
        term: "Listing Optimization",
        description:
          "Strategies and techniques used to enhance the visibility, attractiveness, and performance of vacation rental properties.",
      },
      {
        term: "Local Regulations",
        description:
          "Laws, ordinances, and regulations imposed by local governments or authorities that govern vacation rental properties.",
      },
      {
        term: "Loyalty Programs",
        description:
          "Initiatives implemented by vacation rental businesses to reward and incentivize repeat bookings by guests.",
      },
      {
        term: "Late Checkout",
        description:
          "Allows guests to check out of vacation rental properties later than the standard checkout time for an additional fee.",
      },
      {
        term: "Local Attractions",
        description:
          "Points of interest, activities, and attractions near vacation rental properties that guests may want to visit.",
      },
      {
        term: "Long-Term Rentals",
        description:
          "Rental properties that are rented out for extended periods.",
      },
    ],
  },
  {
    letter: "M",
    section: [
      {
        term: "Multi-Property Management",
        description:
          "Managing multiple vacation rental properties from a single platform or software.",
      },
      {
        term: "Mobile Compatibility",
        description:
          "Ensurs that vacation rental websites and platforms are optimized for mobile devices.",
      },
      {
        term: "Market Analysis",
        description:
          "Analyzing market trends, competition, demand, and pricing strategies in the vacation rental industry.",
      },
      {
        term: "Maintenance Services",
        description:
          "Regular upkeep, repairs, and maintenance tasks to ensure that rental properties are in good condition for guests.",
      },
    ],
  },
  {
    letter: "N",
    section: [
      {
        term: "Net Revenue",
        description:
          "The total revenue generated from vacation rental properties after deducting expenses, taxes, and other costs.",
      },
      {
        term: "Niche Market",
        description:
          "Targeting a specific segment or niche within the vacation rental market.",
      },
      {
        term: "Notification System",
        description:
          "Feature in vacation rental websites and booking platforms that provides alerts, updates, and notifications.",
      },
    ],
  },
  {
    letter: "O",
    section: [
      {
        term: "Occupancy Rate",
        description:
          "The percentage of time that vacation rental properties are occupied by guests compared to their availability.",
      },
      {
        term: "Online Payment Processing",
        description:
          "Accepting payments from guests for bookings and reservations through online payment gateways.",
      },
      {
        term: "Owner Portal",
        description:
          "Secure online portal for property owners to manage their vacation rental properties, bookings, and financials.",
      },
      {
        term: "Occupancy Calendar",
        description:
          "Visual representation of a vacation rental property's availability over a specific period.",
      },
    ],
  },
  {
    letter: "P",
    section: [
      {
        term: "Payment Gateway",
        description:
          "A secure platform that processes payments from guests for bookings and reservations.",
      },
      {
        term: "Peak Season Pricing",
        description:
          "Adjusting rental rates during peak seasons or high-demand periods for vacation rental properties.",
      },
      {
        term: "Professional Photography",
        description:
          "High-quality photos taken by professional photographers to showcase vacation rental properties.",
      },
      {
        term: "Property Management System",
        description:
          "Software used by vacation rental owners and managers to oversee all aspects of property operations.",
      },
      {
        term: "Promotional Offers",
        description:
          "Discounts, deals, or special promotions offered to attract guests and increase bookings.",
      },
    ],
  },
  {
    letter: "Q",
    section: [
      {
        term: "Quality Assurance",
        description:
          "Ensuring that vacation rental properties meet high standards of cleanliness, maintenance, and guest satisfaction.",
      },
      {
        term: "QR Code",
        description:
          "An array of black and white squares or pixels set in a grid that stores data for a machine to read.",
      },
    ],
  },
  {
    letter: "R",
    section: [
      {
        term: "Reservation Management",
        description:
          "Handling bookings, reservations, and guest inquiries for vacation rental properties.",
      },
      {
        term: "Review Management",
        description:
          "Monitoring and responding to guest reviews and feedback for vacation rental properties.",
      },
      {
        term: "Revenue Management",
        description:
          "Strategies for maximizing revenue and profitability for vacation rental properties.",
      },
      {
        term: "Rate Parity",
        description:
          "Maintaining consistent pricing for vacation rental properties across different distribution channels.",
      },
    ],
  },
  {
    letter: "S",
    section: [
      {
        term: "Search Engine Optimization",
        description:
          "Optimizing vacation rental websites and content to improve visibility and ranking in search engine results.",
      },
      {
        term: "Security Deposits",
        description:
          "Refundable deposits collected from guests to cover damages or losses during their stay.",
      },
      {
        term: "Social Media Marketing",
        description:
          "Promoting vacation rental properties and engaging with guests through social media platforms.",
      },
      {
        term: "Superhost",
        description:
          "A designation on Airbnb for hosts who provide exceptional hospitality and meet certain criteria.",
      },
    ],
  },
  {
    letter: "T",
    section: [
      {
        term: "Trust and Safety Measures",
        description:
          "Policies and protocols implemented to ensure the safety and security of guests.",
      },
      {
        term: "Trip Planning Tools",
        description:
          "Tools and resources provided to guests to plan their trips, activities, and itineraries.",
      },
      {
        term: "Technology Integration",
        description:
          "Incorporating digital tools and platforms into vacation rental operations for efficiency and guest experience.",
      },
      {
        term: "Terms and Conditions",
        description:
          "Legal terms and policies governing guest stays, payments, cancellations, and property rules.",
      },
    ],
  },
  {
    letter: "U",
    section: [
      {
        term: "User Experience",
        description:
          "The overall experience and satisfaction of guests using vacation rental platforms and services.",
      },
      {
        term: "Upselling",
        description:
          "Offering additional services to guests to enhance their experience and increase revenue.",
      },
      {
        term: "Unique Selling Proposition",
        description:
          "Distinctive features that set vacation rental properties apart from competitors and attract guests.",
      },
    ],
  },
  {
    letter: "V",
    section: [
      {
        term: "Vacation Rental Management Software",
        description:
          "Software platforms designed to manage bookings, reservations, and operations for vacation rental properties.",
      },
      {
        term: "Virtual Tours",
        description:
          "Interactive virtual tours that showcase vacation rental properties and amenities to potential guests.",
      },
      {
        term: "Value-added Services",
        description:
          "Additional services and amenities provided to guests to enhance their stay and overall experience.",
      },
    ],
  },
  {
    letter: "W",
    section: [
      {
        term: "Website Design",
        description:
          "The visual and functional design of vacation rental websites to attract visitors and facilitate bookings.",
      },
      {
        term: "Wireless Internet Access",
        description:
          "Providing fast and reliable internet connectivity to guests staying at vacation rental properties.",
      },
      {
        term: "Welcome Packages",
        description:
          "Personalized packages or amenities provided to guests upon their arrival to enhance their welcome and experience.",
      },
      {
        term: "Weather Information",
        description:
          "Providing guests with weather forecasts and information to help them plan their activities and stay.",
      },
    ],
  },
  {
    letter: "X",
    section: [
      {
        term: "XML Integration",
        description:
          "Integrating vacation rental systems and platforms using XML technology for seamless data exchange.",
      },
    ],
  },
  {
    letter: "Y",
    section: [
      {
        term: "Yield Management",
        description:
          "Strategies and techniques for optimizing pricing and revenue for vacation rental properties.",
      },
    ],
  },
  {
    letter: "Z",
    section: [
      {
        term: "Zero Contact Check-In",
        description:
          "Implementing contactless check-in processes to minimize physical interactions between guests and staff.",
      },
      {
        term: "Zone-Based Pricing",
        description:
          "Adjusting rental rates based on different geographic zones or areas within a destination.",
      },
    ],
  },
] as const;
