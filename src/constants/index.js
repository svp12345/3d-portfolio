import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  ct,
  itjobxs,
  bootstrap,
  mui,
  express,
  xpenser,
  ecommerce,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C++ Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "express",
    icon: express,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "CitiusTech",
    icon: ct,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Over 1+ year of experience in developing web applications using HTML,CSS,JavaScript,Reactjs",
      "Successfully converted designs from 10+ Figma files into highly functional and responsive web pages",
      "Contributed to the control system architecture for an MRI guided radiation therapy system, enhancing system reliability by 25%",
      "Enhanced existing codebases by utilizing React Hooks reducing component render times by 20% and improving application performance",
      "Resolved issues related to Redux Store and Redux Forms for a cloud-based application, increasing data consistency and reducing bugs by 40%",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "ITJOBXS",
    icon: itjobxs,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Led initiatives in user verification/authentication and overcame engineering challenges to detect and remove fake bots and posts. Resulted in a 30% reduction in fraudulent activities,enhancing system security and boosting user trust",
      "Integrated Google Recaptcha with the website, adding an extra layer of protection and reducing bot activity by 35%",
    ],
  },
];

const projects = [
  {
    name: "YouTube Clone",
    description:
      "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and you can play videos of your choice and you can search to find the content of your choice",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/svp12345/YouTube-clone",
  },
  {
    name: "E-commerce App",
    description:
      "- Building a full-stack web application using stripe and sanity can perform operations like viewing products,placing product orders, add and edit products and cover real payment",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/svp12345/E-commerce",
  },
  {
    name: "Xpenser",
    description:
      "Built using ReactJS and Redux for the state management.We can Add and Delete any expense to the expense list.We can search for any expense from the list.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: xpenser,
    source_code_link: "https://github.com/svp12345/Expense-Tracker",
  },
];

export { services, technologies, experiences, projects };
