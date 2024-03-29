import emoji from "react-easy-emoji";

export const greetings = {
  name: "Joseph Tioluwani",
  title: "Hi, I'm Joseph",
  description:
    "A passionate Software Engineer having an experience of building Web applications with JavaScript / Reactjs, HTML/CSS and some other cool libraries and frameworks. And building scalable microservices with springboot",
  resumeLink:
    "https://docs.google.com/document/d/1nRBvGfxJm4zLGOPfi880_zdRIl34oYdhtUwcai-HCXw/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "Darkhota",
};

export const contact = {
  email: "tioluwanijoseph@gmail.com",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/Darkhota",
  twitter: "https://twitter.com/Darkhota",
  github: "https://github.com/Darkhota",
  linkedin:
    "https://www.linkedin.com/in/joseph-tioluwani-358932177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuhlpRyECTLm5UZQ1CJGJNg%3D%3D",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop microservices with springboot"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "vscode-icons:file-type-rust",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "logos:nextjs-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Babcock University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2015 - June 2019",
  },
];

export const experience = [
  {
    role: "Frontend developer",
    company: "SIDMACH",
    companylogo: "/img/icons/common/sidmach-logo.png",
    date: "FEB 2021 – May 2021",
    descBullets: [
      "I worked on the company's website with react js, collaborating with designers to ensure webpages were user friendly and efficient",
      "Built a careers portal platform with react js that allow job seekers apply for jobs with an admin portal to manage applications and job openings",
    ],
  },

  {
    role: "Front-End Developer",
    company: "Techbarn",
    companylogo: "/img/icons/common/techbarn-logo.png",
    date: "Dec 2019 – Oct 2020",
    descBullets: [
      "Developed front end web pages for a mergers and acquisition portal for the Federal Competition and Consumer Protection Commission with react js, html/css. Link: https://mergers.fccpc.gov.ng/",
      "Development of front-end web pages for an in house web app (Workwise) with React , HTML/CSS, redux and consumed APIs for the software which is aimed at creating a pleasant workplace experience used by various companies",
    ],
  },
  {
    role: "Software Engineer",
    company: "Stanbic IBTC",
    companylogo: "/img/icons/common/stanbic.png",
    date: "April 2022 – Date",

    descBullets: [
      "Developed various complex microservices using springboot and oracle db , implementing features like scheduling, multi threading and optimistic locking which are being  consumed by various clients in production.",
      "Developed the official developers portal/ API marketplace for stanbic IBTC Nigeria, using IBM APIC and APP connect to create APIs that would be marketed to external developers on the platform who need the bank’s APIs in their various projects",
      "Handling various task and solution architecture for API process flows, billing process flow, etc",
    ],
  },
];

export const projects = [
  // {
  //   name: "Twitter Composer",
  //   desc: "This is a project that enables you to schedule tweets/messages, built with react, context api and material UI. It also sorts created tweets by date and time, and I created a function that helps sort tweets created on the same dat.",
  //   link: "https://twitter-composer.vercel.app/",
  //   github: "https://github.com/darkhota/twitter-composer",
  // },
  {
    name: "FCCPC",
    desc: "I worked with a team of developers and designers and translated design to code and also consumed endpoints for this project which is a very large project that handles management of cases reported relating to rendering of services in Nigeria..",
    link: "https://mergers.fccpc.gov.ng",
  },
  {
    name: "Keem The Dj",
    desc: "This is a single web page created with Next Js to showcase an art collection of NFTs",
    link: "https://vercel.com/darkhota/keem-the-dj",
    github: "https://github.com/darkhota/ktd-nft",
  },
  {
    name: "Gig Share",
    desc: "This is a landing page for a design from dribble which show cases my ability do create animations using gsap, html/css",
    link: "https://gig-share-test.vercel.app",
    github: "https://github.com/darkhota/gig-share",
  },
  {
    name: "Crypto Exchange Directory",
    desc: "This is a react app, that shows a list of cryptocurrency exchanges using coin gecko apis",
    link: "https://crypto-exchange-list.vercel.app",
    github: "https://github.com/darkhota/crypto-exchange-directory",
  },
  {
    name: "Visitor Management",
    desc: "This admin dashboard project enables admin to monitor visitors, employees, and items/ company devices coming in and out of a building.(Currently dosent have a backend) ",
    link: "https://visitor-management.vercel.app/",
    github: "https://github.com/darkhota/visitor-management",
  },
  {
    name: "Company Website",
    desc: "I worked on a previous company website. In this project I worked with a team of designers and implemented figma designs using react, particles js, bootstrap and other packages ",
    link: "https://sidmach-website-sample-git-main-lazy-poet.vercel.app/",
  },
  // {
  //   name: "Contact Keeper",
  //   desc: "This web app is used to create store and manage contact. I created this using react, node js , express, mongodb",
  //   github: "https://github.com/darkhota/contact-keeper",
  //   link: "https://hidden-waters-74759.herokuapp.com/",
  // },
];
