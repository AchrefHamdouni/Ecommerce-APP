import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ];

  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  const prevSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='w-full h-80 overflow-x-hidden bottom-0 z-0'>
      <div className='w-screen'>
        <div style={{ transform: `translate(-${currSlide * 100}vw)` }} className='w-[400vw] h-full flex transition-transform duration-1000'>
          {data.map((imgSrc, idx) => (
            <img key={idx} className='w-screen h-full object-cover' loading='eager' src={imgSrc} alt='' />
          ))}
        </div>

       

      </div>
    </div>
  );
};

export default Banner;