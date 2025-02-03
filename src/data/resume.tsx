import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vidyadhari Chennuri",
  initials: "VC",
  url: "https://www.framer.com/", // No personal URL provided
  location: "Worcester, MA",
  locationLink: "https://www.google.com/maps/place/Worcester,+MA",
  description:
    "Programmer Analyst Trainee with strong academic credentials and hands-on project experience in computer science.",
  summary:
    "A dedicated computer science professional with robust academic training and diverse project experience—from developing web-based systems to employing AI and deep learning techniques. Committed to applying technical and extra skills such as presentation, social media, and management skills to solve real-world problems.",
  avatarUrl: "/me.png", // Replace with an actual avatar URL if available
  skills: [
    "Python",
    "SQL",
    "Tableau",
    "Microsoft Office Suite",
    "Presentation skills",
    "Social media skills",
    "Management Skills",
    "Data Engineering",
    "Software Engineering",
    "Design & Analysis Algorithms",
    "Web Technologies",
    "Database Management",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
  ],
  contact: {
    email: "vidyadhari1124@gmail.com",
    tel: "+1 (774) 437-0918",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/vidyadharichennuri",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Cognizant Technology Solutions Private Limited",
      href: "https://www.cognizant.com",
      location: "Bangalore, India",
      title: "Programmer Analyst Trainee",
      logoUrl: "", // Add a logo URL if available
      start: "August 31, 2021",
      end: "June 13, 2022",
      description:
        "Underwent intensive training in Salesforce while working in both administrative and developer roles to gain hands-on experience with the platform.",
    },
  ],
  education: [
    {
      school: "Clark University",
      href: "https://www.clarku.edu",
      degree:
        "Master of Science in Computer Science (STEM) – GPA: 3.85",
      logoUrl: "", // Add a logo URL if available
      start: "", // Start date not provided
      end: "Dec 2024",
    },
    {
      school: "ACE Engineering College JNTUH",
      href: "", // Website not provided
      degree:
        "Bachelor of Technology in Computer Science (STEM) – CGPA: 7.68",
      logoUrl: "", // Add a logo URL if available
      start: "", // Start date not provided
      end: "June 2021",
    },
  ],
  projects: [
    {
      title: "Tourism Management System",
      href: "",
      dates: "",
      active: false,
      description:
        "Worked on ‘Tourism Management System’ using DBMS, web technologies, and software engineering tools. The aim was to partially computerize tourism website operations such as booking tours at affordable prices.",
      technologies: ["DBMS", "Web Technologies", "Software Engineering Tools"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Women and Child Safety Application",
      href: "",
      dates: "",
      active: false,
      description:
        "Developed a Women and Child Safety application during a Hackathon, addressing critical safety concerns.",
      technologies: [],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Online Examination System",
      href: "",
      dates: "",
      active: false,
      description:
        "Created an Online Examination System using web technologies, enabling any registered student to take exams from anywhere.",
      technologies: ["Web Technologies"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Question Pair Similarity in Discussion Forum Websites",
      href: "",
      dates: "",
      active: false,
      description:
        "Investigated question pair similarity in discussion forums using AI as part of a mini project.",
      technologies: ["AI"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Image Caption Generator using Deep Learning",
      href: "",
      dates: "",
      active: false,
      description:
        "Developed an Image Caption Generator using deep learning techniques as part of a major project.",
      technologies: ["Deep Learning"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Don't Junk-it List-it",
      href: "",
      dates: "",
      active: false,
      description:
        "Built 'Don't Junk-it List-it', an online marketplace platform using a SQL database and React JS as part of academic requirements.",
      technologies: ["SQL", "React JS"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Eats Near Your",
      href: "",
      dates: "",
      active: false,
      description:
        "Developed 'Eats Near Your', a restaurant recommendation platform using React JS and Elastic Search Cloud as part of academic requirements.",
      technologies: ["React JS", "Elastic Search Cloud"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
