// ============================================================
// portfolioData.js
// Portfolio data for M Venkata Kishore Reddy
// ============================================================

export const personalInfo = {
  name: "M Venkata Kishore Reddy",
  firstName: "M Venkata Kishore Reddy",
  brandName: "M Venkata Kishore Reddy", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Nellore, India",
  phone: "+919652071285",
  emails: {
    primary: "kishoremuli221@gmail.com",
    secondary: "",
  },
  summary: "Computer Science student and aspiring Python Full Stack Developer skilled in Python, Django, HTML, CSS, JavaScript, React, and database management.",
  resumeUrl: "/KISHORE_REDDY_RESUME.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Kishorereddy965",
  linkedin: "https://www.linkedin.com/in/muli-venkata-kishore-reddy-9b5031259",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm M Venkata Kishore Reddy",
  titleHighlight: "Python Full Stack Developer",
  subtitle: "Computer Science student and aspiring Python Full Stack Developer skilled in building responsive, scalable web applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:kishoremuli221@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/KISHORE_REDDY_RESUME.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">M Venkata Kishore Reddy</span>, a passionate Computer Science student and aspiring Python Full Stack Developer based in Nellore, India. I specialize in building user-friendly web applications, sharpening my skills through the placement training program at TAP Academy. My goal is to become a skilled software developer and contribute to innovative technology solutions.`,
  techStack: ["Python", "Django", "JavaScript", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, user-centric engineering workflow from concept to deployment.",
  cards: [
    { number: "01", title: "Research", text: "Analyzing user requirements, project scope, and system architecture to ensure a solid foundation." },
    { number: "02", title: "Design", text: "Creating intuitive database schemas, clean RESTful APIs, and responsive UI wireframes." },
    { number: "03", title: "Develop", text: "Writing clean, maintainable code across full-stack layers using Django, React, and SQL/NoSQL databases." },
    { number: "04", title: "Deploy", text: "Testing endpoints, optimizing performance, and deploying applications for seamless production access." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Frontend",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Backend & Databases",
      skills: [{ name: "Django" }, { name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "College Tech Fest & Coding Symposium",
    description: "Organized technical workshops and coordinated coding hackathons for over 200+ engineering participants, mentoring juniors on Python fundamentals.",
    role: "Technical Coordinator",
    badge: "Hackathon Organizer",
  },
  {
    title: "Computer Science Student Association",
    description: "Led peer study groups on data structures, algorithmic problem solving, and modern web application development practices.",
    role: "Core Committee Member",
    badge: "Student Leadership",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Python Full Stack Developer Intern",
    duration: "2024 - 2025",
    skills: [
      "Engineered end-to-end full-stack web modules with Django and React",
      "Developed relational database models and schema migrations in MySQL",
      "Implemented secure user authentication and order management workflows",
    ],
    tech: ["Python", "Django", "React", "MySQL", "Git"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating effectively in cross-functional teams to build robust solutions." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex programming problems into logical and efficient code solutions." },
  { name: "Communication", icon: "💬", desc: "Communicating technical concepts clearly and concisely with peers and mentors." },
  { name: "Adaptability", icon: "🌱", desc: "Quickly learning new technologies, frameworks, and modern development practices." },
];

export const projects = [
  {
    id: "stylvo-ecommerce",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Stylvo – E-Commerce Website",
    description: "Developed a full-stack online shopping platform with product browsing, search, cart, user authentication, and order management.",
    techTags: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL", "MongoDB"],
    links: { github: "", demo: "" },
    isFlagship: true,
  },
  {
    id: "food-delivery-app",
    number: "02",
    badge: null,
    title: "Food Delivery Web Application",
    description: "Developed a food ordering application with menu browsing, cart management, and order placement.",
    techTags: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL", "MongoDB"],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/muli-venkata-kishore-reddy-9b5031259",
};

export const education = {
  degree: "B.E Computer Science and Engineering",
  institution: "JNN Institute of Engineering",
  cgpa: "",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Python Full Stack Developer", "Python · Django · React", "Building Modern Web Applications"],
  credential: "B.E Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} M Venkata Kishore Reddy | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

export default personalInfo;
