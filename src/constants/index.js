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
  youtube
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
      date: "July 2022 - Sept 2023",
      points: [
        "I have 1+ years of experience in Web Application Development using HTML,CSS,JavaScript,Reactjs",
        "Converted design of 10+, (Figma) files into highly functional and responsive web pages using ReactJs",
        "Worked on the designing of control system architecture for MRI-guided radiation therapy system",
        "Optimized the Existing Code using React Hooks like useState Hook and useEffect Hook",
        "Worked on API Integration, Designing and Creating New Components Using ReactJS, React Styled Components",
        "Worked on the issues regarding the Redux Store and Redux Forms for cloud based application",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "ITJOBXS",
      icon: itjobxs,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Worked on the Design and Development part of a fully responsive webpage for a section of ITJOBXS",
        "Worked on User Verification/Authentication and Engineering challenges of detecting and removing fake bots and posts",
        "Integrated Recaptcha with the website - Google Layer of Protection for websites",
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