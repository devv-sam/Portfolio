import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import projects from '../project-info.json'
import '../index.css'
import Nav from '../Components/Nav';
import Preloader from '../Components/Preloader';
import SplitType from 'split-type'
import gsap from 'gsap';

const ProjectPage = () => {
  const { id } = useParams();
    // Find the project by ID
    const project = projects.find((proj) => proj.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      console.log("Project not found")
     };
  })

  

  return (
    <>
    <Preloader loadertext={project.name}/>

    <section className='project-page'>
    <Nav />
             <div className='row gapped'>
             <div className='project-info'>
                <div className='project-stats'>
                    <h2>{project.name}</h2>
                    <h4>Project Summary</h4>
                 
                </div>
                <div className='project-duration'>
                   <div className="duration-design">
                      <h3>{project.duration.design}</h3>
                      <p>Design</p>
                    </div>
                    <div className="duration-development">
                      <h3>{project.duration.development}</h3>
                      <p>Development</p>
                    </div>
                   </div>
                   <a href="#" className='btn'>Visit Site <ion-icon name="open-outline" className="icon-ex"></ion-icon></a>
              </div>
              <div className='project-description'>
                  <p>{project.description}</p>
                  <div className='tags'>
                    <div className='tag-div'>
                      {project.tags[0]}
                      </div>
                      <div className='tag-div'>
                      {project.tags[1]}
                      </div>
                  </div>

              </div>
             </div>

        </section>
      
   

    
    </>
  )
}

export default ProjectPage