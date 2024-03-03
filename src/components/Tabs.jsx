// Tabs.js
import React, { useState } from 'react';
import tabData from './Tabdata';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);
  const activeTabData = tabData.find(tab => tab.name === activeTab);

  return (
    <>
    <h1 className='tab-heading'>we’re the first gaming award winners  the world</h1>
      <div className="tab-buttons my-3 d-flex gap-4">
        {tabData.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={activeTab === tab.name ? 'active' : ''}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="row">
        <div className="col-6 .tab-first-column ">
          {activeTabData.columnOneImages.map((image, index) => (
            <img key={index} src={image}   className ="my-3 w-100" alt={`Column One ${activeTab} ${index}`} />
          ))}
        </div>
        <div className="col-6 tab-second-column">
          {activeTabData.columnTwoImages.map((image, index) => (
            <img key={index} src={image} className ="my-3 w-100" alt={`Column Two ${activeTab} ${index}`} />
          ))}

          <div className='d-flex justify-content-between'>
            <div className='collection-div '>
            <p className='mb-0'>We’ve have many more than</p>
            <h1>100+</h1>
            <p className='gaming-p mb-0 d-flex gap-2'>Gaming<span>Collections</span></p>
            </div>
            
            <div className="Register-button d-flex align-items-center">
          <button className="btn" type="button">
            View More
          </button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;



