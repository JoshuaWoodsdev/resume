import React from "react";

const Projects = ({newname}) => {
    return (
        <>

            <section className="projects">
                <div className="project-card">
                    <img src="/path/to/your/image1.jpg" alt="Project 1 description" />
                    <h3>{newname}</h3>
                    <p>Short description about Project 1...</p>
                    <a href="https://link-to-project-1.com" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>

            </section>

        </>
    )
};



export default Projects;