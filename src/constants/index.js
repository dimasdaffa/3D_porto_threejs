import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  laravel,
  mysql,
  git,
  figma,
  python,
  doscom,
  kampus,
  object,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Photographer",
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Member of Programming Division",
    company_name: "Doscom",
    icon: doscom,
    iconBg: "#383E56",
    date: "Sep 2022 - Jul 2023",
    points: [
      "Actively contributed to the programming division by participating in software development projects, collaborating on coding tasks, and solving complex technical problems.",
      "My work involved using various programming languages and tools to develop and optimize software solutions.",
      "This role allowed me to enhance my technical skills, work in a team-oriented environment, and contribute to meaningful projects that impact the organization.",
    ],
  },
  {
    title: "Wirausaha Merdeka Precision Technopreneurship",
    company_name: "Kampus Merdeka",
    icon: kampus,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "The Kampus Merdeka WMK Precision Technopreneurship 2023 program was a transformative journey of entrepreneurial discovery.",
      "With determination, I refined the product, navigated investor engagement, and triumphantly pitched Fontainest at a prestigious investor summit.",
      "Presenting in front of esteemed investors for the first time was an exhilarating experience that tested my nerves and public speaking abilities.",
    ],
  },
  {
    title: "Flutter Mentor Doscom University",
    company_name: "Doscom",
    icon: doscom,
    iconBg: "#383E56",
    date: "Sep 2022 - Jul 2023",
    points: [
      "I taught the basics of Flutter development to students, focusing on foundational concepts and practical applications.",
      "I conducted introductory workshops, developed learning materials tailored to beginners, and provided mentorship to help students build their first mobile applications.",
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
    name: "Fashion Object Detection",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "yolov8",
        color: "pink-text-gradient",
      },
    ],
    image: object,
    source_code_link: "https://github.com/dimasdaffa/fashion-object-detection.git",
  },
  {
    name: "Hate Speech Detection",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "logisticregression",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: object,
    source_code_link: "https://github.com/dimasdaffa/hateDetection-ETH.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
