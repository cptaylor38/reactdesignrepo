import React, { useEffect, useRef } from 'react';
import './Hero.scss';
import wel_image from '../../../../Assets/Images/bubbles.jpg';
import { TimelineMax, TweenMax, Power4 } from 'gsap';

const Hero = () => {
  const heroImage = useRef(null);
  const lead = useRef(null);
  let t1 = new TimelineMax();
  useEffect(() => {
    setTimeout(() => {
      t1.fromTo(
        heroImage.current,
        { maxHeight: '100vh' },
        { maxHeight: '50vh', duration: 2, ease: Power4.easeInOut }
      );
      t1.fromTo(
        lead.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.75, ease: Power4.easeInOut }
      );
    }, 750);
  }, []);
  return (
    <>
      <div className='wel__v__container'>
        <img
          ref={heroImage}
          src={wel_image}
          alt='unsplash bubbles'
          className='wel__hero__image'
        />
      </div>
      <div className='wel__lead' ref={lead}>
        <h1>Ready to feel better?</h1>
      </div>
    </>
  );
};

export default Hero;
