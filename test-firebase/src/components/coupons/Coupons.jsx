import React, { useEffect, useRef, useState } from 'react';
import './Coupons.scss';
import specialOfferImage from "../../images/specialoffer.png";

const cuponImages = [
  specialOfferImage,
  specialOfferImage,
  specialOfferImage,
  specialOfferImage,
  specialOfferImage,
];


const Coupons = () => {
  const carouselRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [clonedCoupons, setClonedCoupons] = useState([]);

  useEffect(() => {
    // Clona los cupones para crear el efecto de carrusel infinito
    const clonedItems = cuponImages.concat(cuponImages);

    setClonedCoupons(clonedItems);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseOver = () => {
      setIsMouseOver(true);
    };

    const handleMouseOut = () => {
      setIsMouseOver(false);
    };

    carousel.addEventListener('mouseover', handleMouseOver);
    carousel.addEventListener('mouseout', handleMouseOut);

    return () => {
      carousel.removeEventListener('mouseover', handleMouseOver);
      carousel.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    let currentPosition = 0;

    const startCarousel = () => {
      if (!isMouseOver) {
        currentPosition += 1; // Ajusta la velocidad

        if (currentPosition >= carouselRef.current.scrollWidth / 2) {
          currentPosition = 0; // Vuelve al inicio del carrusel
        }

        carouselRef.current.scrollLeft = currentPosition;
      }

      animationFrameId = requestAnimationFrame(startCarousel);
    };

    startCarousel();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseOver]);

  return (
    <div>

      <div className="Coupons-carousel" ref={carouselRef}>
        <div className="Coupons-container">
          {clonedCoupons.map((cuponImage, index) => (
            <div
              className="cupon"
              key={index}
              style={{ backgroundImage: `url(${cuponImage})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
