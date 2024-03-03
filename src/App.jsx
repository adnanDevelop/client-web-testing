import React from "react";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PartnerLogos from "./components/Partnerlogos";
import SliderCustom from "./components/SliderCustom";
import GameCard from "./components/GameCard";
import Banner from "./components/Banner";
import "./App.css";
import "./responsive.css"
import particle from "./assets/images/partical.png";
import particlee from "./assets/images/partical2.png";
import card from "./assets/images/card-1.png";
import Footer from "./components/Footer";
import Tabs from './components/Tabs';
import center from  './assets/images/center-img.png';
import Accordion from "./components/Accordian";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      
      <PartnerLogos />
      <br />
      <br />
      <br />
      <GameCard />
      <br />
      <br />
      <br />
      
      <div className="row my-5">
          <div className="text-center">
            <img src={center} alt="Twitch" className="" />

            <h1 className="text-white w-75 mx-auto">THE Most recent Patterns, Conveyed Directly TO YOUR INBOX.</h1>
          </div>

          <Accordion />
        </div>
      <div className="container" style={{ color: "white" }}>
          <Tabs />
        <div className="row my-5">
          <div className="text-center">
            <img src={center} alt="Twitch" className="" />
            <h1>Happy Client</h1>
          </div>
          <SliderCustom />
        </div>
      </div>
   <Footer/>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default App;
