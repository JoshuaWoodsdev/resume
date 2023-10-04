
import * as React from "react";
import '../styles/styles.css';
import Projects from "../components/projects";
import Footer from "../components/footer";
import profileImg from '../images/holder.jpg';
import NavBar from "../components/navbar";



const IndexPage = () => {
  const projectData = [
    {
      title: "The Olfactive",
      description: "Site about fragrance",
      src: profileImg,  // Add this
      link: "https://theolfactive.com"
    },
    {
      title: "Remota",
      description: "Job Board",
      src: profileImg,  // Add this
      link: "https://theolfactive.com"
    },
    {
      title: "The Olfactive",
      description: "Site about fragrance",
      src: profileImg,  // Add this
      link: "https://theolfactive.com"
    },
   
  ]
  return (
    <>     
      <NavBar/>
      <header className="profile-header">
  
        <section className="about">
          <h1>Joshua Woods</h1>
          <p>Web Development | UX/UI</p>
          <p>
            I'm a multi-talented web developer, UX/UI designer, and creative professional
            specializing in human-centered projects. I create engaging digital experiences
            that prioritize user needs and desires, combining technical expertise with creative problem-solving.
            My goal is to deliver intuitive interfaces and visually captivating designs that make a lasting impact.
          </p>
        </section>
        <img src={profileImg} alt="Joshua Woods" className="profile-image" />
      </header>

      <main>

        <section className="podcast">
          <h2>PODCAST featuring interviews with:</h2>
          {/* Your podcast content here */}
        </section>

        <section className="project-section">
          <h2>My Projects</h2>
          <div className="project-cards">
            {projectData.map((data, index) => (
              <Projects key={index} title={data.title} description={data.description} src={data.src} />
            ))}
          </div>
        </section>

        <section className="work-together">
          <h2>Lets work together</h2>
          {/* Your collaboration content or contact form here */}
        </section>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;