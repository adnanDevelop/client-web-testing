import React from 'react';
import arrowUp from '../assets/images/arrow-up.png';
import arrowp from '../assets/images/arrow-down.png';
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="accordion-item mt-4">
        <div className="accordion-title" onClick={onClick}>
          {/* Use your custom images */}
          <img src={isOpen ? arrowUp : arrowp} alt="Dropdown Icon" style={{ width: '24px', height: '24px' }} />
          <h4 className='question'>{question}</h4>
        </div>
        {isOpen && <div className="accordion-content">{answer}</div>}
      </div>



    );
  };

  export default AccordionItem;