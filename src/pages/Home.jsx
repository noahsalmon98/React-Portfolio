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

    </div>
  );
};


export default AppHome;
