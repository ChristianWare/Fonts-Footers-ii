export const faqs = [
  {
    id: 36,
    question: "What is your experience with Next.js?",
    answer:
      "I have been working with Next.js since version 10 was available with the pages router. Now I build all my projects with the latest verion 14, which utilizes the app router.",
  },
  {
    id: 36.1,
    question: "Can you explain your role in previous Next.js projects?",
    answer:
      "I have contributed to many Next.js projects, both large and small. I have desiged components, implemented server-side rendering, optimized performance, and integrated APIs.",
  },
  {
    id: 36.2,
    question: "What technologies do you use alongside Next.js?",
    answer:
      "I am proficient in other technologies such as React, Node.js, MongoDB, GraphQL, and many more.",
  },
  {
    id: 36.3,
    question: "How do you handle state management in Next.js applications?",
    answer:
      "Depending on the project/situation, I use the built in React features useState and useEffect. But if the state needs to be accessible accross the entire app, then I'll use libraries like Redux or Zustand. Sometimes I'll use the built in Context API.",
  },
  {
    id: 36.4,
    question: "Have you worked with Next.js for SEO optimization?",
    answer:
      "Yes, I have optimized many Next.js applications for SEO by implementing dynamic routing, meta tags, and structured data to improve search engine visibility.",
  },
] as const;

export const footer = [
  {
    id: 1,
    heading: "Home",
    href: "/#home",
  },
  {
    id: 6,
    heading: "About",
    href: "#about",
  },
  {
    id: 11,
    heading: "Projects",
    href: "#projects",
  },
  {
    id: 16,
    heading: "FAQ",
    href: "#faq",
  },
] as const;
