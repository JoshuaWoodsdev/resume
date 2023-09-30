import React from "react";

const Projects = ({title, description})=> {
    return (
            <section className="projects">
                <div className="project-card">
                    <img src="/path/to/your/image1.jpg" alt="" />
                    <h3></h3>
                      <p>{title}</p>
                      <p>{description}</p>
                    <a href="https://link-to-project-1.com" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </section>
    )
};



export default Projects;