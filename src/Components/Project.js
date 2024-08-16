import React from 'react'
import '../index.css';


const Project = ({prxname, prxtype, prxdate}) => {
  return (
        <>
        <a href="#" className='project'>
        <div className="wrapper">
                <div className="prx-thumb">
                    <img src="template.png" alt="Project Thumbnail"></img>
                </div>
                <div className='prx-details'>
                    <div className="prx-basic">
                      <div className="prx-title">
                            <div className='star'>✦</div>
                            <h4>{prxname}</h4>
                        </div> 
                        <div className="prx-subtitle">
                                <p>{prxtype} — {prxdate}</p>
                        </div>
                    
                    </div>
                    <div className="btn-external">
                    <a href="#" className='btn'>Learn more <ion-icon name="open-outline" className="icon-ex"></ion-icon></a>    
                    </div>
                </div>
            </div>

        </a>
            


        </>
  )
}

export default Project