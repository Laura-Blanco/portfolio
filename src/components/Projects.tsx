import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Sample Project</h3>
        <p>A brief description of the project showcasing React and TypeScript skills.</p>
      </div>
      <div className="project-card">
        <h3>Another Project</h3>
        <p>Details about this project and its impact.</p>
      </div>
    </section>
  );
};

export default Projects;