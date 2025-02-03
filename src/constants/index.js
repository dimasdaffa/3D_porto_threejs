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
  du,
  rp,
  kampus,
  udinus,
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
    date: "Mar 2024 - Apr 2024",
    points: [
      "I taught the basics of Flutter development to students, focusing on foundational concepts and practical applications.",
      "I conducted introductory workshops, developed learning materials tailored to beginners, and provided mentorship to help students build their first mobile applications.",
    ],
  },
  {
    title: "Coordinator Publication & Documentation Doscom University",
    company_name: "Doscom",
    icon: du,
    iconBg: "#383E56",
    date: "Mar 2024 - Apr 2024",
    points: [
      "Managed all aspects of publication and documentation, ensuring accurate and timely content delivery.",
      "Involved in organizing events and photo sessions.",
    ],
  },
  {
    title: "Lead of Release Party 2024",
    company_name: "Doscom",
    icon: rp,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
      "Successfully led the planning and execution of the 'Release Party 2024: Leveraging Cloud & Linux for DevSolutions,' a national seminar that highlighted the release of TeaLinux and explored key topics in cloud computing.",
      "My responsibilities included coordinating all aspects of the event, from logistics and speaker management to public speaking engagements.",
      "This role allowed me to integrate technical knowledge with event management skills, contributing to a successful and impactful seminar that brought together industry professionals and enthusiasts.",
    ],
  },
  {
    title: "Head of Public Relations",
    company_name: "Doscom",
    icon: doscom,
    iconBg: "#383E56",
    date: "Jul 2024 - Present",
    points: [
      "Led the public relations efforts, focusing on building and maintaining a positive public image for the organization.",
      "My responsibilities included developing PR strategies, crafting press releases, managing media relations, and coordinating with external partners.",
      "Through my leadership, the organization saw increased visibility and improved communication with its audience, contributing to its overall success.",
    ],
  },
  {
    title: "Laboratory Intern",
    company_name: "Universitas Dian Nuswantoro",
    icon: udinus,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Assisted in maintaining laboratory PCs by troubleshooting software and hardware issues, including component replacement and software updates.",
      "Provided technical support to lab users and helped ensure the stability of network connections.",
      "Documented maintenance activities and contributed to preventive measures to keep systems functioning optimally.Assisted in maintaining laboratory PCs by troubleshooting software and hardware issues, including component replacement and software updates. Provided technical support to lab users and helped ensure the stability of network connections. Documented maintenance activities and contributed to preventive measures to keep systems functioning optimally.",
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
