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
                   <a href={project.externalLink} className='btn'>Visit Site <ion-icon name="open-outline" className="icon-ex"></ion-icon></a>
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
             <div className='banner-image'>
              <img src={project.bannerImage} alt="Banner Image" ></img>
             </div>

          <section className='project-introduction'>
         <div className='content-wrap'>
         <div className='center-intro'>
              <div className='introduction'>
              <h4>INTRODUCTION</h4>
              <p>{project.introduction}</p>
             </div>
              </div>
             <div className='row gap-jc'>
              <div className='role-tools'>
                <div className='role'>
                  <h4 className='h4-lt'>MY ROLE</h4>
                  <p className='p-lt'>{project.role}</p>
                </div>
                <div className="tools">
                  <h4 className='h4-lt'>TOOLS</h4>
                  <p className='p-lt'>{project.tools}</p>
                </div>
              </div>
              <div className="client-duration">
                <div className='client'>
                  <h4 className='h4-lt'>CLIENT</h4>
                  <p className='p-lt'>{project.client}</p>
                </div>
                <div className="duration">
                  <h4 className='h4-lt'>DURATION</h4>
                  <p className='p-lt'>{project.totalDuration}</p>
                </div>
              </div>
             </div>
         </div>
          </section>
          <div className='duo-banner'>
            <img src={project.showcaseOne}></img>
            <img src={project.showcaseTwo}></img>
          </div>
        <section className='problem-section content-wrap'>
        <div className='problem'>
            <h4 className='h4-lt'>THE PROBLEM</h4>
            <p classname="p-lt">{project.problem}</p>
          </div>
        </section>
    <div className="banners">
    <div className='banner-image'>
              <img src={project.bannerShowcaseOne} alt="Showcase Image" ></img>
             </div>
    </div>
    <section className='solution-section content-wrap'>
        <div className='solution'>
            <h4 className='h4-lt'>THE SOLUTION</h4>
            <p classname="p-lt">{project.solution}</p>
          </div>
        </section>

      <div className='duo-banner'>
                <img src={project.showcaseThree}></img>
                <img src={project.showcaseFour}></img>
              </div>
              <section className='outcome-section content-wrap'>
        <div className='outcome'>
            <h4 className='h4-lt'>THE OUTCOME</h4>
            <p classname="p-lt">{project.outcome}</p>
          </div>
        </section>
          </section>
      


    
    </>
  )
}

export default ProjectPage