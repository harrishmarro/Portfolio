import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  blender,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  unity,
  starbucks,
  tesla,
  shopify,
  Krypt,
  threejs,
  nextjs,
  Snipper,
  TIEMA,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Designer",
    icon: mobile,
  },
  {
    title: "VR Application Developer",
    icon: backend,
  },
  {
    title: "Coder",
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
    name: "Blender",
    icon: blender,
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
    name:"Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Unity Developer",
    company_name: "Lux & Decibels",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Developed a VR application for their project with the Indian Navy – VR ",
      "Assisted the X-Reality team in Developing the software -Leadership, Teamwork",
      "Worked in Blender for 3D Modelling and Animation and imported the model in Unity for VR implementation using XR plugin Management.-Modelling and Animation",
      "Tested the VR application using the Meta Quest 2 and debugged the late rendering process issues – Decision Making, Debugging",
      "Worked at the Ministry of Defense project at the Navy Base Southern Command Headquarters Cochin."
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "Ingage Technologies Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Nov 2022",
    points: [
      "Worked along with the experts in their Real-time Projects and got a better exposure that how a VR application is built and tested and stipend",
      "Worked on Unity and Oculus and built a basic VR application",
      "Found bug in modelling process and cleared it, it saves them 10% render Process time- tester",
      "Suggested software and hardware modifications to reduce lag time and improve overall speed.",
    ],
  },
  {
    title: "Maintenance Support Intern",
    company_name: "Neyveli Lignite Cooperation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2022 - Sep 2022",
    points: [
      "Created a Website using Angular JS and JSON for maintenance so clients can easily add data, edit it and fetch it from the local server – Angular JS,JSON.",
      "This reduces Time as well as need for individual workers by 30% - Critical Thinking",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Reviewed technical documentation to complete equipment maintenance and repair.",
      "Worked with building managers to assess ongoing needs and plan preventive maintenance and cleaning schedules."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Krypt",
    description:
      "Web3.0 application that utilizes React and Solidity for Ethereum transactions. This application enables users to interact with the Ethereum blockchain, perform transactions, and manage their Ether assets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Krypt,
    source_code_link: "https://github.com/harrishmarro/web3.0",
  },
  {
    name: "TIEMA",
    description:
      "Web application that is developed for the college to track and record the internships attended by the students.It enables the sudent to submit their report and certificates for their credit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TIEMA,
    source_code_link: "https://github.com/harrishmarro/TIEMA-project",
  },
  {
    name: "Snipper",
    description:
      "Social Media Web Application that enables the users to upload and view videos and post shared in it.It is designed in a responsive way so that user can use in any device. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Snipper,
    source_code_link: "https://github.com/harrishmarro/snipper",
  },
];

export { services, technologies, experiences, testimonials, projects };
