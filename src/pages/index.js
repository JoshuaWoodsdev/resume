import * as React from "react"
import '../styles/styles.css';
import Projects from "../components/projects";
import Footer from "../components/footer";

const IndexPage = () => {
const projectData = [
  { title: "The Olfactive", description: "Site about fragrance" },
  { title: "Project 1", description: "Description 1" },
  { title: "Project 1", description: "Description 1" },
  { title: "Project 1", description: "Description 1" },
]




  return (
    <>
      <header>
        <h2><span className="highlight">Joshua Woods</span></h2>
      </header>

      <main>
        <section className="about">
          <div className="about-text">
            <p>Dedicated front-end developer with an extensive background in creating responsive and user-centric web applications. I combine a deep understanding of design patterns with technical expertise to craft seamless web experiences. Proficient in various web technologies and grounded in Linux system administration, I deliver both innovative and robust solutions.
            </p>
          </div>
        </section>

        <nav className="links">
          <a href="#">GitHub</a>
          <a href="#">Projects</a>
          <a href="mailto:theolfactive@gmail.com">Contact</a>
        </nav>

        <div className="project-cards">
               {projectData.map((data, index) => (
                <Projects key={index} title={data.title} description={data.description} />
               ))}
        </div>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Front-End Development: Vue.js/Nuxt.js, Expo, React</li>
            <li>UI/UX Design: Figma, AdobeXD</li>
            <li>Content Management Systems: Sanity.io, DatoCMS</li>
            <li>Development: Expo.js, Gatsby.js, Git, HTML5, CSS3</li>
          </ul>
        </section>
        <section className="experience">
          <h2>Experience</h2>

        </section>
        <section className="education">
          <h2>Education</h2>
          <p>Devslopes, TeamTreeHouse</p>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
