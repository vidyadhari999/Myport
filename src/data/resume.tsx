import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "VIDYADHARI CHENNURI",
  initials: "VC",
  url: "https://www.google.com/", // Not provided
  location: "Worcester, MA",
  locationLink: "https://www.google.com/maps/place/Worcester,+MA",
  description:
    "Professional Java Full Stack Developer with over 8 years of specialized experience in developing web-based applications and delivering innovative, customized solutions to meet dynamic industry needs.",
  summary: `
**Summary of Experience**

I’m honing Java Full Stack Developer skills, covering web-based app development and microservices. Working with Core Java, JavaEE, Angular, Hibernate, and Spring Boot, I’m managing data streaming and UI components effectively.
`,
  avatarUrl: "/me.png", // Your avatar image in public folder
  skills: [
    "Core Java",
    "JavaEE",
    "Servlets",
    "JDBC",
    "Multithreading",
    "Spring MVC",
    "Spring Boot",
    "Struts Framework",
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "JQuery",
    "Angular",
    "Aspect-Oriented Programming (AOP)",
    "Inversion of Control (IoC)",
    "Spring Security OAuth 2.0",
    "Dockerized Spring Boot on AWS",
    "CI/CD Pipelines",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Elastic Search",
    "Spring Cloud Config",
    "Netflix OSS",
    "Eureka",
    "Zuul",
    "Hystrix",
    "Kafka",
    "Zookeeper",
    "Hibernate",
    "GitHub",
    "SVN",
    "JUnit",
    "Karma",
    "Jasmine",
    "Apache Tomcat",
    "Jetty",
    "Maven",
    "JIRA",
    "SOAP UI",
    "Docker Hub",
    "Agile",
    "Scrum",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "chennurividyadhari@gmail.com",
    tel: "+1 508-470-7105",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vidyadhari-chennuri",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@chennurividyadhari",
        icon: Icons.globe, // Fallback icon for Medium
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "JP Morgan and Chase",
      href: "https://www.jpmorganchase.com",
      location: "",
      title: "Java Full Stack Developer",
      logoUrl: "/jpmorgon.png",
      start: "May 2023",
      end: "Present",
      description: `
**Responsibilities:**
- Developed dynamic, single-page web applications using Angular 16 with NgRx and Angular Signals.
- Designed and implemented Spring Boot microservices for high-volume transaction processing.
- Built and optimized data streaming pipelines using Kafka.
- Managed MySQL databases with complex SQL queries, stored procedures, and triggers.
- Configured AWS infrastructure (EC2, S3, RDS, Route53, IAM) for scalable deployments.
- Automated build and deployment using GitLab CI/CD and managed version control with GitHub.
- Enhanced logging and monitoring with Amazon CloudWatch.
- Migrated legacy systems to the AWS cloud.
- Collaborated in an Agile environment.
`
    },
    {
      company: "NNG",
      href: "",
      location: "Omaha, NE",
      title: "Java/J2EE Developer",
      logoUrl: "/nng.png",
      start: "Aug 2021",
      end: "Apr 2023",
      description: `
**Responsibilities:**
- Developed dynamic and reusable UI components using Angular.
- Built microservices using Spring Boot to provide RESTful services.
- Developed REST controllers in Spring MVC and integrated EJB 3.0.
- Utilized Apache Kafka for messaging and data streaming.
- Managed AWS cloud infrastructure and automated backups.
- Configured AWS RDS for high availability.
- Employed Jenkins for continuous integration and Docker for containerization.
- Participated in Agile methodologies and managed Git repositories.
`
    },
    {
      company: "Health Mart Systems Inc.",
      href: "",
      location: "San Francisco, CA",
      title: "Java Full Stack Developer",
      logoUrl: "/healthmart.png",
      start: "Dec 2019",
      end: "July 2021",
      description: `
**Responsibilities:**
- Developed dynamic and reusable UI components using Angular and Angular Material.
- Designed presentation layers using JSP, HTML, CSS, JavaScript, and jQuery.
- Built backend logic with Spring MVC and implemented RESTful and SOAP web services.
- Managed DB2 databases with JDBC and Hibernate ORM.
- Configured AWS infrastructure including EC2, S3, and Elastic Load Balancing.
- Participated in Agile processes and collaborated during UAT.
`
    },
    {
      company: "Cipher Health",
      href: "",
      location: "NYC, NY",
      title: "Java Developer",
      logoUrl: "/cipherhealth.png",
      start: "Feb 2018",
      end: "Nov 2019",
      description: `
**Responsibilities:**
- Developed and maintained Servlet components using the Struts Framework.
- Implemented Action Forms and Controllers following the MVC architecture.
- Designed applications using Java, J2EE, and Spring MVC.
- Wrote PL/SQL queries, stored procedures, and triggers.
- Utilized Hibernate ORM and automated builds with Maven.
- Performed unit testing with JUnit and participated in Agile processes.
`
    },
    {
      company: "WalkingTree Technologies",
      href: "",
      location: "Hyderabad, IN",
      title: "Junior Java/J2EE Developer",
      logoUrl: "/walkingtree.png",
      start: "Apr 2016",
      end: "Feb 2018",
      description: `
**Responsibilities:**
- Assisted in developing responsive UIs using Angular and the MVC design pattern.
- Contributed to backend development using Spring Boot, Spring MVC, and Spring Security.
- Assisted with database interactions using Hibernate ORM and JDBC templates.
- Participated in build automation with Maven and version control with SVN.
- Supported unit and integration testing with JUnit.
`
    },
  ],
  education: [
    {
      school: "Clark University",
      href: "https://www.clarku.edu",
      degree: "Master of Science in Computer Science (STEM)",
      logoUrl: "/clark.png",
      start: "",
      end: "Dec 2024",
    },
  ],
  // Projects section using curated Unsplash URLs for precise images
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
      image: "https://images.unsplash.com/photo-1542317854-f14b996bfdbd?auto=format&fit=crop&w=300&h=200",
      video: "",
    },
    {
      title: "Women and Child Safety Application",
      href: "",
      dates: "",
      active: false,
      description:
        "Developed a Women and Child Safety application addressing critical safety concerns.",
      technologies: [],
      links: [],
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1584697964154-5f66a9f9d39f?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1573497019413-11b7a8c08a24?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1581093588401-8e3dc5cfdc1e?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1600180758895-6341a4ff3ffb?auto=format&fit=crop&w=300&h=200",
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
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=300&h=200",
      video: "",
    },
  ],
} as const;
