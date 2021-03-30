import React, { useEffect, useRef } from 'react';
import './Hero.scss';
import wel_image from '../../../../Assets/Images/bubbles.jpg';
import { TimelineMax, TweenMax, Power4 } from 'gsap';

const Hero = () => {
  const heroImage = useRef(null);
  let t1 = new TimelineMax();
  useEffect(() => {
    t1.fromTo(
      heroImage.current,
      { maxHeight: '100vh' },
      { maxHeight: '50vh', duration: 2, ease: Power4.easeOut }
    );
  }, []);
  return (
    <div className='wel__v__container'>
      <img
        ref={heroImage}
        src={wel_image}
        alt='unsplash bubbles'
        className='wel__hero__image'
      />
      <div className='wel__hero_description'>
        <h1>Wellzal</h1>
        <h3>(Zycoscalatrine)</h3>
      </div>
    </div>
  );
};

export default Hero;
