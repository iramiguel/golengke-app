import { useState } from "react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  ArrowRight,
  CircleDot,
  Circle,
} from "lucide-react";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
// import Meat from "../assets/images/meat.png";
// import Seafood from "../assets/images/seafood.png";
// import FruVeg from "../assets/images/fruits.png";
// import Others from "../assets/images/condiments.png";

type CarouselProps = {
  imageUrls: string[];
};

export function Carousel({ imageUrls }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel-img-wrapper">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              className="carousel-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>

        {/* <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          >
            <div className="carousel-slide slide-1">
              <img src={Meat} alt="Meat" />
            </div>
            <div className="carousel-slide slide-2">
              <img src={Seafood} alt="Seafood" />
            </div>
            <div className="carousel-slide slide-3">
              <img src={FruVeg} alt="Fruits and Vegetables" />
            </div>
            <div className="carousel-slide slide-4">
              <img src={Others} alt="Others" />
            </div>
          </div>
        </div> */}

        <div className="carousel-text-wrapper">
          <span>Meat</span>
        </div>
      </div>

      <div className="carousel-btn-wrapper">
        <button onClick={showPrevImage} className="carousel-btn">
          <CircleChevronLeft strokeWidth={3} size={34} />
        </button>
        <div className="selector-wrapper">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              className="selector-btn"
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ))}
        </div>
        <button onClick={showNextImage} className="carousel-btn">
          <CircleChevronRight strokeWidth={3} size={34} />
        </button>
      </div>
      <div className="all-btn-wrapper">
        <button onClick={() => navigate("/products")}>
          View All <ArrowRight />
        </button>
      </div>
    </div>
  );
}
