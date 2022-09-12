import SliderItem from "./SliderItem";
import REVIEWS from "../../../content/SliderContent";
import styles from "./Slider.module.css";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = (props) => {
  const [showSlide, setShowSlide] = useState(0);
  const length = REVIEWS.length;
  const { slide, active } = styles;
  // const prevSlide = () => {
  //   setShowSlide(showSlide === 0 ? length - 1 : showSlide - 1);
  // };

  // const nextSlide = () => {
  //   setShowSlide(showSlide === length - 1 ? 0 : showSlide + 1);
  // };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(showSlide === length - 1 ? 0 : showSlide + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [showSlide, length]);
  return (
    <section className={styles.sliderContainer}>

      <div>
        {REVIEWS.map((item, index) => {
          return (
            <div
              className={index === showSlide ? `${slide} ${active}` : { slide }}
              key={index}
            >
              {index === showSlide && (
                <SliderItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  breed={item.breed}
                  review={item.review}
                  currentSlide={showSlide}
                />
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Slider;
