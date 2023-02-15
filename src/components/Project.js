import React from 'react';

function Project(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
      <a href={props.url}>View project</a>
    </div>
  );
}

export default Project;