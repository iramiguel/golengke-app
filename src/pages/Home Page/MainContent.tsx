// import React from "react";
import { Carousel } from '../../components/Carousel';
import "./MainContent.css";
import mainImage from "../../assets/images/main-image.png";
import Meat from "../../assets/images/meat.png";
import Seafood from "../../assets/images/seafood.png";
import FruVeg from "../../assets/images/fruits.png";
import Others from "../../assets/images/condiments.png";

const IMAGES = [Meat, Seafood, FruVeg, Others];

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
        <img src={mainImage} alt="Bayong" className="main-image"/>
      <div className="main-content">
        <h2>Old School Palengke,<br></br> The Modern Way</h2>
        <p>
          In a simple yet revolutionary move, we’ve brought the beloved chaos
          and charm of the local palengke straight to your fingertips. No more
          waking up at dawn. No more squeezing through crowds. Just the same
          fresh vegetables, meats, and seafood — now handpicked, cleaned, and
          delivered to your door. No compromises. No preservatives. Just the
          same trusted suki experience, made digital.
        </p>
      </div>
      <div className="carousel">
        <Carousel imageUrls={IMAGES} />
      </div>
    </div>
  );
};

export default MainContent;
