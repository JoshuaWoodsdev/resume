import * as React from "react"
import '../styles/styles.css';
import Projects from "../components/projects";
import Footer from "../components/footer";


const IndexPage = () => {
  return (
    <>
      <header>
        <h1><span class="highlight">Joshua Woods</span></h1>
      </header>

      <main>
      <section class="about">
    <div class="about-text">
        A dedicated front-end developer with an extensive background in creating responsive and user-centric web applications. I combine a deep understanding of design patterns with technical expertise to craft seamless web experiences. Proficient in various web technologies and grounded in Linux system administration, I deliver both innovative and robust solutions.
    </div>
    <div class="about-text">
        My approach to development is rooted in exploring common design patterns. Passionate about bridging the gap between UX and technical functionality, I invite you to explore my portfolio and collaborate on impactful and innovative projects.
    </div>
</section>


        <section class="links">
          <a href="#">GitHub</a>
          <a href="#">Projects</a>
          <a href="mailto:theolfactive@gmail.com">Contact</a>
        </section>

        <section class="skills">
          <h2>Skills</h2>
          <ul>
            <li>Front-End Development: Vue.js/Nuxt.js, Expo, React</li>
            <li>UI/UX Design: Figma, AdobeXD</li>
            <li>Content Management Systems: Sanity.io, DatoCMS</li>
            <li>Development: Expo.js, Gatsby.js, Git, HTML5, CSS3</li>
          </ul>
        </section>
        <div className="project-cards">        
        <Projects />
        <Projects />
        <Projects />
        <Projects/>
        </div>

        <section class="experience">
          <h2>Experience</h2>

            <div class="experience-card">
              <h3>Notepad Application (Vue.js)</h3>
              <p>Planned the UX/UI and developed a user-friendly notepad application. Features responsive design for optimal UX across devices.</p>
            </div>

            <div class="experience-card">
              <h3>TheOlfactive.com (Gatsby.js)</h3>
              <p>Planned the UX/UI and developed an elegant website using Gatsby.js. Prioritized performance and SEO optimization.</p>
            </div>

            <div class="experience-card">
              <h3>Time Tracker Resource App (Solidjs)</h3>
              <p>Designed the UX/UI and created a time tracker app tailored for web and Linux desktop users, leveraging the power of Solidjs.</p>
            </div>

            <div class="experience-card">
              <h3>Classified App for Cosmetic Industry (Nuxt3)</h3>
              <p>Planned the UX/UI and developed a niche-focused classified application for the cosmetic industry using Nuxt3, ensuring a seamless user journey.</p>
            </div>
     
            <div class="experience-card">
              <h3>Classified App for Cosmetic Industry (Nuxt3)</h3>
              <p>Planned the UX/UI and developed a niche-focused classified application for the cosmetic industry using Nuxt3, ensuring a seamless user journey.</p>
            </div> 
        </section>

        <section class="education">
          <h2>Education</h2>
          <p>Devslopes, TeamTreeHouse</p>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;

