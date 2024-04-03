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
import Img from "../../public/images/house23.png";

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
        term: "Ace",
        description: "Another term for a hole-in-one.",
      },
      {
        term: "Address",
        description:
          "The golfer's stance and position with the club before taking a shot.",
      },
      {
        term: "Albatross",
        description: "Scoring three strokes under par on a hole.",
      },
      {
        term: "Approach Shot",
        description:
          "A shot played towards the green, typically from the fairway.",
      },
    ],
  },
  {
    letter: "B",
    section: [
      {
        term: "Backswing",
        description:
          "The initial part of the golf swing where the club is moved away from the ball.",
      },
      {
        term: "Ball Marker",
        description:
          "A small object used to mark the position of a golfer's ball on the green.",
      },
      {
        term: "Birdie",
        description: "Scoring one stroke under par on a hole.",
      },
      {
        term: "Blow-up Hole",
        description: "A hole where a golfer scores much higher than usual.",
      },
      {
        term: "Bunker",
        description: "A hazard on the golf course filled with sand.",
      },
    ],
  },
  {
    letter: "C",
    section: [
      {
        term: "Caddy",
        description:
          "A person who carries a golfer's clubs and provides assistance during a round.",
      },
      {
        term: "Chip Shot",
        description: "A short shot played near the green with a lofted club.",
      },
      {
        term: "Cup",
        description:
          "The hole on the putting green where the ball is ultimately intended to go.",
      },
      {
        term: "Cut Shot",
        description:
          "A shot intentionally shaped to move from left to right (for a right-handed golfer).",
      },
    ],
  },
  {
    letter: "D",
    section: [
      {
        term: "Divot",
        description: "A piece of turf or sod displaced by a golf shot.",
      },
      {
        term: "Driver",
        description: "The club used for the longest shots from the tee.",
      },
      {
        term: "Draw",
        description:
          "A shot that curves gently from right to left (for a right-handed golfer).",
      },
    ],
  },
  {
    letter: "E",
    section: [
      {
        term: "Eagle",
        description: "Scoring two strokes under par on a hole.",
      },
      {
        term: "Etiquette",
        description: "The customary code of behavior on the golf course.",
      },
      {
        term: "Escape Shot",
        description:
          "A shot played from a difficult lie or situation to get out of trouble.",
      },
    ],
  },
  {
    letter: "F",
    section: [
      {
        term: "Fairway",
        description: "The mowed area between the tee and the green.",
      },
      {
        term: "Fade",
        description:
          "A controlled shot that moves from left to right (for a right-handed golfer).",
      },
      {
        term: "Flagstick",
        description:
          "The marker, usually a pole with a flag, that indicates the location of the hole on the green.",
      },
      {
        term: "Fore",
        description: "A warning shout to alert others of an incoming ball.",
      },
      {
        term: "Four-Ball",
        description:
          "A type of golf competition where two teams of two players compete, and the lower score of each team is used for each hole.",
      },
    ],
  },
  {
    letter: "G",
    section: [
      {
        term: "Green",
        description: "The finely manicured area surrounding the hole.",
      },
      {
        term: "Grip",
        description: "The way a golfer holds the club.",
      },
      {
        term: "Groove",
        description:
          "The indentations on the face of a golf club that affect ball spin and control.",
      },
      {
        term: "Gimme",
        description:
          "An agreement between players to count a short putt as made without actually holing out.",
      },
      {
        term: "Grain",
        description:
          "The direction in which the blades of grass on the putting green are growing, which can affect the roll of the ball.",
      },
    ],
  },
  {
    letter: "H",
    section: [
      {
        term: "Handicap",
        description: "A measure of a golfer's ability.",
      },
      {
        term: "Hazard",
        description:
          "A general term for bunkers or water obstacles on the course.",
      },
      {
        term: "Hook",
        description:
          "A shot that curves sharply from right to left (for a right-handed golfer).",
      },
      {
        term: "Hole-in-One",
        description:
          "A shot that goes directly into the hole from the tee, completing the hole in one stroke.",
      },
      {
        term: "Hosel Rocket",
        description:
          "A shot where the ball is struck near the hosel of the club, often resulting in a poor outcome.",
      },
    ],
  },
  {
    letter: "I",
    section: [
      {
        term: "Iron",
        description: "A type of golf club with a flat, metal head.",
      },
      {
        term: "In the Hole",
        description: "When the ball is successfully holed.",
      },
      {
        term: "Interlocking Grip",
        description:
          "A style of gripping the golf club where the little finger of the bottom hand is hooked around the index finger of the top hand.",
      },
      {
        term: "Impact",
        description:
          "The moment when the clubface contacts the ball during the swing.",
      },
    ],
  },
  {
    letter: "J",
    section: [
      {
        term: "Jigger",
        description: "An obsolete term for a low-lofted iron club.",
      },
      {
        term: "Jointed Club",
        description:
          "A type of golf club with a hinged or jointed shaft, designed to be collapsible for easy transport.",
      },
      {
        term: "Jumping the Ball",
        description:
          "A shot where the ball is struck on the upswing, resulting in a higher trajectory and increased distance.",
      },
    ],
  },
  {
    letter: "K",
    section: [
      {
        term: "Knockdown",
        description:
          "A shot played with a lower trajectory to control distance and wind.",
      },
      {
        term: "Kick Point",
        description:
          "The point on the shaft of a golf club where it bends the most during the swing, influencing the trajectory of the shot.",
      },
      {
        term: "Knee-Knocker",
        description:
          "A short putt, usually three feet or less, that is considered easy but can be missed if not focused on.",
      },
    ],
  },
  {
    letter: "L",
    section: [
      {
        term: "Lie",
        description: "The position of the ball on the ground.",
      },
      {
        term: "Lag Putt",
        description:
          "A long putt played with the intention of leaving the ball close to the hole, rather than trying to make it.",
      },
      {
        term: "Lob Shot",
        description:
          "A high, short shot typically played with a wedge, causing the ball to land softly on the green.",
      },
      {
        term: "Local Rule",
        description:
          "A rule or condition set by a golf course that may differ from the official rules of golf.",
      },
    ],
  },
  {
    letter: "M",
    section: [
      {
        term: "Mulligan",
        description: "A do-over, typically not allowed in official play.",
      },
      {
        term: "Mid-Iron",
        description:
          "A golf club with moderate loft, typically including clubs numbered 3 through 6.",
      },
      {
        term: "Marker",
        description:
          "A device or object used to identify the location of a golfer's ball on the green.",
      },
      {
        term: "Mashie",
        description: "An obsolete term for a medium-lofted iron club.",
      },
    ],
  },
  {
    letter: "N",
    section: [
      {
        term: "Nine Iron",
        description: "A type of iron club with a moderate loft.",
      },
      {
        term: "Nassau",
        description:
          "A type of golf betting game that is played over three separate matches: front nine, back nine, and overall 18 holes.",
      },
    ],
  },

  {
    letter: "O",
    section: [
      {
        term: "Open Face",
        description:
          "A clubface that is angled to the right for a right-handed golfer.",
      },
      {
        term: "Out of Bounds",
        description:
          "Areas outside the boundaries of the golf course where play is not allowed.",
      },
    ],
  },

  {
    letter: "P",
    section: [
      {
        term: "Par",
        description:
          "The standard number of strokes a skilled golfer should take to complete a hole.",
      },
      {
        term: "Pitch Shot",
        description:
          "A shot played with a higher trajectory than a chip but lower than a full swing.",
      },
      {
        term: "Plugged Lie",
        description:
          "A ball that is partially or fully buried in its own pitch mark, often occurring in soft ground.",
      },
    ],
  },

  {
    letter: "Q",
    section: [
      {
        term: "Qualifier",
        description:
          "A tournament round used to determine eligibility for an event.",
      },
    ],
  },

  {
    letter: "R",
    section: [
      {
        term: "Rough",
        description: "The longer grass on the sides of the fairway.",
      },
      {
        term: "Ryder Cup",
        description:
          "A biennial men's golf competition between teams from Europe and the United States.",
      },
    ],
  },

  {
    letter: "S",
    section: [
      {
        term: "Sand Trap",
        description: "A hazard filled with sand, also known as a bunker.",
      },
      {
        term: "Slice",
        description:
          "A shot that curves sharply to the right for a right-handed golfer.",
      },
      {
        term: "Stance",
        description:
          "The position of a golfer's feet before and during a shot.",
      },
    ],
  },

  {
    letter: "T",
    section: [
      {
        term: "Tee",
        description: "The designated area to start each hole.",
      },
      {
        term: "Three-Putt",
        description:
          "Taking three strokes to complete a hole on the putting green.",
      },
      {
        term: "Topspin",
        description:
          "A type of spin applied to the golf ball that causes it to roll forward upon landing.",
      },
    ],
  },

  {
    letter: "U",
    section: [
      {
        term: "Up and Down",
        description:
          "Completing a hole in two strokes from just off the green.",
      },
    ],
  },

  {
    letter: "V",
    section: [
      {
        term: "Vardon Grip",
        description:
          "A grip style named after golfer Harry Vardon, with the little finger of the bottom hand overlapping the index finger of the top hand.",
      },
    ],
  },

  {
    letter: "W",
    section: [
      {
        term: "Wedge",
        description: "A type of club designed for short, high shots.",
      },
      {
        term: "Whiff",
        description:
          "A swing and miss, where the club fails to make contact with the ball.",
      },
    ],
  },

  {
    letter: "X",
    section: [
      {
        term: "None",
        description: "No X yet",
      },
    ],
  },

  {
    letter: "Y",
    section: [
      {
        term: "Yips",
        description:
          "A nervous condition that causes a golfer to twitch or flinch during a shot.",
      },
    ],
  },

  {
    letter: "Z",
    section: [
      {
        term: "Zoomie",
        description:
          "A drive that goes further than most drives ever hit by the golfer who smacked it.",
      },
    ],
  },
];
