import styles from "./Slider.module.css";
import { FaPaw } from "react-icons/fa";
const SliderItem = (props) => {
  const { slider } = styles;

  return (
    <div className={slider}>
      {/* <h2>{props.name}</h2> */}
      <div className={styles.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.rating}>
        <span><FaPaw /></span>
        <span><FaPaw /></span>
        <span><FaPaw /></span>
        <span><FaPaw /></span>
        <span><FaPaw /></span>
      </div>
      <p>"{props.review}"</p>
    </div>
  );
};

export default SliderItem;
