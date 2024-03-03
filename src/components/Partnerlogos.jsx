import React from "react";
import twitchLogo from "../assets/images/twitch-logo.png";
import chessLogo from "../assets/images/chesscom logo.png";
import gamesradarLogo from "../assets/images/games.png";
import robloxLogo from "../assets/images/robolox-logo.png";

const PartnerLogos = () => {
  return (
    <section className="partner-logos">
      <div className="container">
        <div className="partner-logo-row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-6">
            <img src={twitchLogo} alt="Twitch" className="img-fluid" />
          </div>
          <div className="col-md-2 col-6">
            <img src={robloxLogo} alt="Twitch" className="img-fluid" />
          </div>
          <div className="col-md-2 col-6">
            <img src={chessLogo} alt="Twitch" className="img-fluid" />
          </div>
          <div className="col-md-2 col-6">
            <img src={gamesradarLogo} alt="Twitch" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
