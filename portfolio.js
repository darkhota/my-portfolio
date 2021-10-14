import emoji from "react-easy-emoji";

export const greetings = {
  name: "Joseph Tioluwani",
  title: "Hi, I'm Joseph",
  description:
    "A passionate Front end Web Developer having an experience of building Web applications with JavaScript / Reactjs, HTML/CSS and some other cool libraries and frameworks.",
  resumeLink:
    "https://docs.google.com/document/d/1nRBvGfxJm4zLGOPfi880_zdRIl34oYdhtUwcai-HCXw/edit?usp=sharing"
};

export const openSource = {
  githubUserName: "Darkhota"
};

export const contact = {
  email: "tioluwanijoseph@gmail.com"
};

export const socialLinks = {
  instagram: "https://www.instagram.com/Darkhota",
  twitter: "https://twitter.com/Darkhota",
  github: "https://github.com/Darkhota",
  linkedin:
    "https://www.linkedin.com/in/joseph-tioluwani-358932177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuhlpRyECTLm5UZQ1CJGJNg%3D%3D"
};

export const skillsSection = {
  title: "What I do",
  subTitle: "Front end web developer",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "vscode-icons:file-type-rust"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon"
    }
  ]
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90" //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "20"
  },
  {
    Stack: "Programming",
    progressPercentage: "60"
  }
];

export const educationInfo = [
  {
    schoolName: "Babcock University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2015 - June 2019"
  }
];

export const experience = [
  {
    role: "Frontend developer",
    company: "SIDMACH",
    companylogo: "/img/icons/common/sidmach-logo.png",
    date: "FEB 2021 – May 2021",
    descBullets: [
      "I worked on the company's website with react js, collaborating with designers to ensure webpages were user friendly and efficient",
      "Built a careers portal platform with react js that allow job seekers apply for jobs with an admin portal to manage applications and job openings"
    ]
  },

  {
    role: "Front-End Developer",
    company: "Techbarn",
    companylogo: "/img/icons/common/techbarn-logo.png",
    date: "Dec 2019 – Oct 2020",
    descBullets: [
      "Developed front end web pages for a mergers and acquisition portal for the Federal Competition and Consumer Protection Commission with react js, html/css. Link: https://mergers.fccpc.gov.ng/",
      "Development of front-end web pages for an in house web app (Workwise) with React , HTML/CSS, redux and consumed APIs for the software which is aimed at creating a pleasant workplace experience used by various companies"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "SAED",
    companylogo: "/img/icons/common/saed-logo.png",
    date: "July 2019 – Oct 2019",

    descBullets: [
      "Learnt basic HTML/css and Javascript by completing tasks given to me by senior colleagues",
      "Assisted senior developers in creating web pages for company website and company products with react.js"
    ]
  }
];

export const projects = [
  {
    name: "Visitor Management",
    desc:
      "This admin dashboard project enables admin to monitor visitors, employees, and items/ company devices coming in and out of a building.(Currently dosent have a backend) ",
    link: "https://visitor-management.vercel.app/",
    github: "https://github.com/darkhota/visitor-management"
  },
  {
    name: "Company Website",
    desc:
      "I worked on a previous company website. In this project I worked with a team of designers and implemented figma designs using react, particles js, bootstrap and other packages ",
    link: "https://sidmach-website-sample-git-main-lazy-poet.vercel.app/"
  },
  {
    name: "Contact Keepers",
    desc:
      "This web app is used to create store and manage contact. I created this using react, node js , express, mongodb",
    github: "https://github.com/darkhota/contact-keeper",
    link: "https://hidden-waters-74759.herokuapp.com/"
  }
];
