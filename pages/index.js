import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Joseph Tioluwani",
          description: "A passionate Front-end Web Developer.",
          image: "https://avatars.githubusercontent.com/u/53085787?v=4",
          url: "https://my-portfolio-orpin-beta.vercel.app/",
          keywords: [
            "Joseph",
            "Joseph Tioluwani",
            "Darkhota",
            "@darkhota",
            "Portfolio",
            "Joseph Portfolio ",
            "Joseph Tioluwani Portfolio",
            "web developer",
            "front end",
            "front end web developer",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
            "next"
          ]
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData }
  };
}
