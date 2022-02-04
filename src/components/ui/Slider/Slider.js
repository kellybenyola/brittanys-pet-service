import SliderItem from "./SliderItem";
import REVIEWS from "../../../content/SliderContent";
import styles from "./Slider.module.css";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = (props) => {
  const [showSlide, setShowSlide] = useState(0);
  const length = REVIEWS.length;
  const { slide, active } = styles;
  const prevSlide = () => {
    setShowSlide(showSlide === 0 ? length - 1 : showSlide - 1);
  };

  const nextSlide = () => {
    setShowSlide(showSlide === length - 1 ? 0 : showSlide + 1);
  };
  console.log(showSlide);
  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderButton}>
        <button onClick={prevSlide}>
          <FaArrowAltCircleLeft />
        </button>
      </div>

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

      <div>
        <button onClick={nextSlide}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
