// tabData.js

import tabOneImage from '../assets/images/tabone.png';
import tabTwoImage from '../assets/images/tabtwo.png';
import tabThreeImage from '../assets/images/tabthree.png';
import tabFourImage from '../assets/images/tabfour.png';


const tabData = [
    {
      name: "Adventure",
      columnOneImages: [
        tabOneImage,
      tabTwoImage,
      ],
      columnTwoImages: [
        tabThreeImage,
        tabFourImage,
      ]
    },
    {
      name: "Arcade",
      columnOneImages: [
        tabFourImage,
        tabThreeImage,
      ],
      columnTwoImages: [
        tabOneImage,
      tabTwoImage,
      ]
    },

    {
        name: "Arena",
        columnOneImages: [
          tabOneImage,
          tabTwoImage,
        ],
        columnTwoImages: [
            tabFourImage,
            tabThreeImage,
        ]
      },

      {
        name: "Avoider",
        columnOneImages: [
          tabOneImage,
        tabTwoImage,
        ],
        columnTwoImages: [
          tabThreeImage,
          tabFourImage,
        ]
      },

      {
        name: "Balance",
        columnOneImages: [
          tabThreeImage,
          tabOneImage,
        ],
        columnFourImages: [
          tabFourImage,
        tabTwoImage,
        ]
      },
    // ... other tabs
  ];
  
  export default tabData;
  
  

  