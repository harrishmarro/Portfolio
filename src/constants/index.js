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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Backend Developer",
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
    name: "docker",
    icon: docker,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
