import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./ImageSlider.css";
import Card from "./Card";

const ImageSlider = ({ images, category }) => {
  console.log("images", images);
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="image-slider">
      {category === "TodaysBanner" && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {category === "SmallBanner" && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: null, // Disables the next button
            prevEl: null, // Disables the previous button
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>Cooked Food</p>
                <div className="rating">
                  {"★".repeat(Math.floor(item.rating)) +
                    (item.rating % 1 >= 0.5 ? "☆" : "") +
                    "☆".repeat(5 - Math.ceil(item.rating))}
                </div>
                <p>Rs {item.price}.00</p>
                <div className="actions">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                  <button className="cart-button">Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {category === "Drinks" && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: null, // Disables the next button
            prevEl: null, // Disables the previous button
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="card">
            <Card
            image={item.image}
            name={item.name}
            category="Drinks"
            rating={item.rating}
            price={item.price}
          />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ImageSlider;
