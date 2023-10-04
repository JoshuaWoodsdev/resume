import React from "react";

const Projects = ({title, description, src}) => {
    return (
        <div className="projects">
            <div className="project-card">
                <img src={src} alt={title} className="project-image" />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Projects;
