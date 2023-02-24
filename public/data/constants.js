import { AiOutlineConsoleSql, AiOutlineDatabase } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "OZZ admin-dashboard",
    description: "It's an admin dashboard built from scratch with React framework. This product for my first job with AWStreams company, it's your Contactless Digital Wallet",
    tags: ["React", "redux", "Formik","axios", "react table", "qrcode.react", "recharts"],
    img: '/projects/social-wallet.webp'
  },
  {
    id: 2,
    title: "E-Commercy app",
    description: "Using Nextjs, Sanity CMS and Stripe i built e-commerce website integrating with headless CMS to manage content and API and using my knowlage of Nextjs to take advantage of it.",
    tags: ["NextJs", "Sanity", "React", "Stripe"],
    source: "https://ecommercy-app.vercel.app/",
    visit: "https://ecommercy-app.vercel.app/",
    img: '/projects/ecommere.png'
  },
  {
    id: 3,
    title: "Google Search-clone",
    description: "Create a little demo for google search integrate with RapidAPI.",
    tags: ["React", "RapidAPI", "Tailwind"],
    source: "https://github.com/Ahmed-Elkassas/google-search-clone",
    visite: "",
    img: '/projects/google-search.jpg'
  },
  
  {
    id: 4,
    title: "Job website",
    description: "Template shows available jobs.",
    tags: ["React", "semantic-ui-react", "axios"],
    source: "https://github.com/Ahmed-Elkassas/Jobs-website",
    visite: "https://react-jobswebsite.netlify.app",
    img: '/projects/jobs.webp'
  },
];

export const courses = {
  onPrgress: [
    {
      id: 1,
      name: "Nodejs",
      link: "https://www.udemy.com/course/nodejs-the-complete-guide",
      percent: "0.36",
      finished: '36% is Finished',
      icon: <FaNodeJs size="2.9rem"  />
    },
    {
      id: 2,
      name: "SQL",
      link: "https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql",
      percent: "1",
      finished: 'Finished',
      icon: <AiOutlineConsoleSql size="2.9rem" />
    },
  ],
  hold: [
    {
      id: 1,
      name: "Datastracture & Algorithems",
      link: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass",
      percent: "0.4",
      finished: '40% is Finished',
      icon: <AiOutlineDatabase size="3.5rem" />
    },
    {
      id: 2,
      name: "React Native",
      link: "https://www.udemy.com/course/react-native-the-practical-guide",
      percent: "0.15",
      finished: '15% is Finished',
      icon: <FaReact size="2.9rem" />,
      color: "#61DAFB"
    },
  ]
}