import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import '../index.css';

const Preloader = ({loadertext}) => {
    // video animation settings

        useEffect(() => {
            gsap.registerPlugin(Flip);
        
            const preloaderBackground = document.querySelector('.preloader__background');
            const preloaderText = document.querySelector('.preloader__text span');
            const body = document.querySelector('body');
            
        
            const setInitialStates = () => {
                gsap.set(preloaderText, {
                    yPercent: 100
                });
                gsap.set(body, {
                  overflow: 'hidden',
                  position: 'fixed'
                });
            }
        
            const preloaderAnimation = () => {
              // Preloader animation
                const tl = gsap.timeline({
                    defaults: {
                        ease: 'power2.out'
                    }
                });
        
                tl.to(preloaderText, {
                    yPercent: 0,
                    delay: 0.5,
                    duration: 1,
                    ease: 'power2.inOut'
                }).to(preloaderText, {
                    yPercent: -100,
                    delay: 1,
                     
                }).to(preloaderBackground, {
                    yPercent: -100,
                    duration: 1.5,
                    ease: 'power4.inOut'
                })
                   
                return tl;
            }
            const removePreloader = () => {
              gsap.set(body, {
                overflow: '',
                position: '',
                delay: 3.5
            })
            }
            
        
            setInitialStates();
        
            const master = gsap.timeline();
            master.add(preloaderAnimation());
            master.add(removePreloader());
        
        
        
    }, []); // Empty array ensures this runs only once

    return (
        <>
               <div className="preloader">
                <p className="preloader__text">
                    <span>{loadertext}</span>
                </p>
                <div className="preloader__background"></div>
            </div>

        </>
    );
}

export default Preloader;
