import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../assets/images/star.png";
import arrow from "../assets/images/testimonial-arrow.png";
import testimonialImage from '../assets/images/t2.png';
import secondImage from '../assets/images/testimonial1.png';
import thirdImage from '../assets/images/third.png';





const slidesData = [
  {
    testimonial: testimonialImage,
    text: "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. " ,
    name: "Esther Howard",
    anothertext:"Quick and adaptable, SoundPart consistently meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable."
  },
  {
    testimonial: secondImage,
    text: "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. " ,
    name: "John Doe",
    anothertext:"Quick and adaptable, SoundPart consistently meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable."
  },
  {
    testimonial: thirdImage,
    text: "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. " ,
    name: "Jane Doe",
    anothertext:"Quick and adaptable, SoundPart consistently meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable."
  }
];



const SliderCustom = () => {
 // Slider settings
const settings = {
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  items: 1,
  stagePadding: 20,
  center: true,
  nav: false,
  margin: 50,
  dots: true,
  loop: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
};


 

  return (
   
     

      <section className='mb-4'>
        <div className='testimonials-slider-container my-5 pb-5'>
        <img src={arrow} className='arrow-img'/>
        <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div className='testimonial-slide' key={index}>
           
           
            <div className='testimonial-content'>
            <img src={star} className='mb-3'/>
            <p className='text-center'>{slide.text}</p>
            <p className='text-center pt-3 testimonial-text'>{slide.anothertext}</p>
                  <img src={slide.testimonial} className='testimonial-text py-3' alt={`Testimonial ${index}`} />
                   <h4 className='testimonial-name '>{slide.name}</h4>
            </div>
    
          </div>
           ))}
            </Slider>
        </div>

      </section>
   
  );
};

export default SliderCustom;
