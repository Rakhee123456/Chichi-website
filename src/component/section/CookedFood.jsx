import React from "react";
import MushroomChoila from "../../asset/Mushroom-Choila.jpg.webp";
import "./CookedFood.css";
import ImageSlider from "../global/ImageSlider";
import Khukhuri from "../../asset/khukhuri.jpg";
import Gorkha from "../../asset/Gorkha.png";
import Fanta from "../../asset/Fanta.jpeg";
import Signature from "../../asset/signature.jpeg";
import Tuborg from "../../asset/Tuborg.jpg";
import GoldenOak from "../../asset/Golden.jpeg"; 


const CookedFood = ({ title, category }) => {
  let foodItems = [];
  if(category==="SmallBanner"){
    foodItems = [
      {
        name: "Spicy Mushroom Choila",
        price: 295,
        image: MushroomChoila,
        rating: 4.5,
      },
      {
        name: "Jumbo Umami Fried and Stirred Buff Chili",
        price: 975,
        image: MushroomChoila,
        rating: 4.8,
      },
      {
        name: "Jumbo Sour Marinated Buff Sadeko",
        price: 965,
        image: MushroomChoila,
        rating: 4.7,
      },
      {
        name: "Jumbo Umami Fried and Stirred Paneer Chilly",
        price: 995,
        image: MushroomChoila,
        rating: 4.9,
      },
      {
        name: "Jumbo Umami Fried and Stirred Paneer Chilly",
        price: 995,
        image: MushroomChoila,
        rating: 4.9,
      },
      {
        name: "Jumbo Umami Fried and Stirred Paneer Chilly",
        price: 995,
        image: MushroomChoila,
        rating: 4.9,
      },
    ];
  }

  else if(category==="Drinks"){
    foodItems = [
      {
        name: "Gorkha Strong",
        price: 295,
        image: Gorkha,
        rating: 4.5,
      },
      {
        name: "Fanta Bottle 2.25Litre",
        price: 975,
        image: Fanta,
        rating: 4.8,
      },
      {
        name: "signature Whiskey",
        price: 965,
        image: Signature,
        rating: 4.7,
      },
      {
        name: "Tuborg Bottle",
        price: 995,
        image: Tuborg,
        rating: 4.9,
      },
      {
        name: "Golden Oak whisky Bottle",
        price: 995,
        image: GoldenOak,
        rating: 4.9,
      },
      {
        name: "Khukhuri Rum Bottle",
        price: 995,
        image: Khukhuri,
        rating: 4.9,
      },
    ];
  }
 
  return (
    <div>
      <section className="food-cards">
        <h2>{title}</h2>
        <ImageSlider images={foodItems} category={category} />
      </section>
    </div>
  );
};

export default CookedFood;
