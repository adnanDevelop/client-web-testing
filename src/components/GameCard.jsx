import React from 'react';
import game1Image from '../assets/images/card-1.png';
import game2Image from '../assets/images/card-2.png';
import game3Image from '../assets/images/Card-3.png';

const GameCard = () => {
  return (
    <section className='game-card-section mb-5 pb-3'>
      <div className='container'>
        <div className="row game-card-section-row ">
          {[game1Image, game2Image, game3Image].map((gameImage, index) => (
            <div key={index} className="col-md-4 game-card-col mb-4">
              <div className="game-cards">
                <img src={gameImage} alt={`Game ${index + 1}`} className="img-fluid" />
                <div className='card-body text-center'>
                  <button className="btn play-now-btn">PLAY NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCard;

