import React from "react";
import PropTypes from "prop-types";
import "./Card.css"; // Add styling for the card component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faCartShopping, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons";

const Card = ({ image, name, category, rating, price }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar ? "☆" : ""}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{category}</p>
        <div className="rating">{renderStars(rating)}</div>
        <p>Rs {price}.00</p>
        <div className="actions">
          <button>-</button>
          <span>1</span>
          <button>+</button>
          <button className="cart-button">Add to Cart</button>
        </div>
      </div>
      <div className="icons-container">
        <button>
          <FontAwesomeIcon icon={faCartShopping} className="social-icon icons" />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} className="social-icon icons" />
          
        </button>
        <button>
          <FontAwesomeIcon icon={faEye} className="social-icon icons" />
        </button>

      </div>
    </div>
  );
};

// Define prop types for better type checking
Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

Card.defaultProps = {
  category: "Food",
};

export default Card;