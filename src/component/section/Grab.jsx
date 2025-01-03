import React from "react";
import "./Grab.css";
import MushroomChoila from "../../asset/Mushroom-Choila.jpg.webp";
import Card from "../global/Card";

const Grab = () => {
  const foodItems = [
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
  ];

  return (
    <div className="grab">
      <h1>Grab, Pack, Feast!</h1>
      {/* <CookedFood  category="Gram" /> */}

      <div className="card-container">
        {foodItems.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Grab;
