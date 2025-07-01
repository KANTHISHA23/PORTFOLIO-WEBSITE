import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import proj1 from '../../assets/proj1.png';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/proj3.jpg';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Projects = () => {
  const projects = [
    {
      title: 'DEV-SPACE',
      description:
        'DevSpace is a personalized platform for users to create, edit, and manage their posts and albums. CRUD functionalities are implemented to handle data and utilized APIs to fetch and display data dynamically.',
      imgUrl: proj1,
      links: 'https://devspacesync.netlify.app/',
    },
    {
      title: 'SIMON SAYS',
      description:
        'SIMON SAYS is a classic memory challenge built with HTML, CSS, and JavaScript. Players test their recall by repeating an ever-growing sequence of flashing colors. With each correct turn, the difficulty ramps up— dynamic levels and visual effects with feedback for correct/incorrect inputs.',
      imgUrl: proj2,
      links: 'https://github.com/KANTHISHA23/Simon-Says-Game',
    },
    {
      title: 'STUDYHUB',
      description:
        'StudyHub is a dynamic web application built to help students explore and access courses based on modern technologies. It includes secure user authentication and leverages local storage to personalize the user experience.',
      imgUrl: proj3,
      links: 'https://github.com/KANTHISHA23/StudyHub',
    },
  ];

  const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: false, 
    });

  return (
    <Wrapper
      id="projects"
      className='projects-content-wrapper'
      title='Projects'
      background='light'
    >
      <section
  ref={ref}
  className={`wrapper2 slide-in ${inView ? 'animate' : ''}`}>
        <p>
          Here are a few projects that I have made in the process of learning
          development.
        </p>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              links={project.links}
              key={index}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;
