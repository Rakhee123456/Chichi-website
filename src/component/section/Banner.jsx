import React from "react";
import "./Banner.css";
import ImageSlider from "../global/ImageSlider"; // Adjust the path to match your project structure
import FoodSnacks from "../../asset/food-snack.webp";
import drinks from "../../asset/soft-drinks.png";
import Grilled from "../../asset/grilled.jpeg";
import Curry from "../../asset/curry.webp";
import Cooked from "../../asset/Cooked.jpg";
import Chilli from "../../asset/chilli.jpg";
const Banner = () => {
  // Images for the slider
  const sliderImages = [
    FoodSnacks,
    FoodSnacks,
    FoodSnacks,
    FoodSnacks,
  ];

  // Discoveries data
  const discoveries = [
    { label: "Drinks", img: drinks },
    { label: "Fast Food", img: FoodSnacks },
    { label: "Grilled", img: Grilled},
    { label: "Curry", img:  Curry },
    { label: "Cooked Food", img: Cooked },
    { label: "Chilli", img: Chilli },
  ];

  return (
    <div className="banner-main-content">
      <div className="banner-slider">
        <h1>Today's Special</h1>
        <div className="banner-slide-content">
          {/* Pass sliderImages dynamically to ImageSlider */}
          <ImageSlider images={sliderImages} category="TodaysBanner" />
        </div>
        <button onClick={() => alert("You are clicking order now")}>Order Now</button>
      </div>
      <div className="banner-discoveries">
        <h2>Dish Discoveries</h2>
        <div className="discoveries-grid">
          {discoveries.map((item, index) => (
            <div key={index} className="discoveries-grid-item">
              {item.img && <img src={item.img} alt={item.label} />}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
