import React, { useState, useEffect } from "react";
import "../../styles/components/hero-carousel.css";
import carousel1 from "../../assets/images/carousel_1.png";
import carousel2 from "../../assets/images/carousel_2.png";
import carousel3 from "../../assets/images/carousel_3.png";
import carousel4 from "../../assets/images/carousel_4_hire_talent.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Dream Job",
      subtitle: "Discover thousands of opportunities from top companies",
      image: carousel1,
    },
    {
      id: 2,
      HireTopTalent: true, // Marker for potential specific styling if needed, or just a new slide
      title: "Hire Top Talent",
      subtitle: "Connect with the best candidates to grow your business",
      image: carousel4,
    },
    {
      id: 3,
      title: "Connect with Top Companies",
      subtitle: "Build your career with industry leaders",
      image: carousel2,
    },
    {
      id: 4,
      title: "Your Career Journey Starts Here",
      subtitle: "Join thousands of successful professionals",
      image: carousel3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <div className="carousel-image-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-content">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={goToPrevious}
      >
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-arrow carousel-arrow-next" onClick={goToNext}>
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
