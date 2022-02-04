import styles from "./Slider.module.css";
import { FaPaw } from "react-icons/fa";
const SliderItem = (props) => {
  const { slider } = styles;

  return (
    <div className={slider}>
      <h2>{props.name}</h2>
      <div className={styles.img}>
        <img src={props.img} alt="" />
      </div>
      <span className={styles.rating}>
        <FaPaw />
        <FaPaw />
        <FaPaw />
        <FaPaw />
        <FaPaw />
      </span>
      <p>{props.review}</p>
    </div>
  );
};

export default SliderItem;
