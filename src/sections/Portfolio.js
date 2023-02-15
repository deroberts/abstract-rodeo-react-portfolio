import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <Project
        title="Project 1"
        description="This is a project I worked on that does amazing things."
        image="https://example.com/project1.jpg"
        url="https://example.com/project1"
      />
      <Project
        title="Project 2"
        description="This is another project I worked on that does even more amazing things."
        image="https://example.com/project2.jpg"
        url="https://example.com/project2"
      />
    </section>
  );
}

export default Portfolio;
