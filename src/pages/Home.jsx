import React from 'react';
import './App.css';

const AppHome = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'Name1',
      description: 'Description',
      image: '',
      link: 'Link',
    },
    {
        title: 'Name2',
        description: 'Description',
        image: '',
        link: 'Link',
    },
    {
        title: 'Name3',
        description: 'Description',
        image: '',
        link: 'Link',
    },
  ];

  return (
    <div className="portfolio">
      <header>
        <h1>Noah Salmon</h1>
        <p>Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Sample Text
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me at <a href="noahsalmon98@gmail.com">noahsalmon98@gmail.com</a>.
        </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Noah Salmon. All Rights Reserved.</p>
      </footer>

    </div>
  );
};


export default AppHome;
