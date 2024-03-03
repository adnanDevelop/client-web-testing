// Accordion.js
import React, { useState } from 'react';
import AccordionItem from './Accordianitem';
import accordionData from './Accordiandata';
import accordian from "../assets/images/accordian-img.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='container'>
    <div className='row'>
      {/* Column for the image */}
      <div className='col-6'>
        <img src={accordian} alt="Accordion Visual" style={{ width: '100%', height: 'auto' }} />
      </div>
      {/* Column for the accordion */}
      <div className='col-6 mt-5 pt-5'>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
       
        <div className="Register-button mt-5">
          <button className="btn" type="button">
            Play Now
          </button>
        </div>

      
        
        
      </div>
    </div>
  </div>
  
  );
};

export default Accordion;
