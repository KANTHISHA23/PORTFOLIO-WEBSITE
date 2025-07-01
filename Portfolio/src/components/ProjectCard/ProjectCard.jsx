import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <div className='project-card'>
      <img src={imgUrl} alt={title} />

      {/* Overlay */}
      <div className='card-overlay'>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={links} target='_blank' rel='noopener noreferrer'>
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
