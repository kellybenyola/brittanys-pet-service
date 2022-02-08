import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Dogs from "../../../assets/images/dogs.png";
function Home(props) {

  const topLoad = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={props.bgColor}>
      <section className={styles.homeTop}>
        <div className={styles.title}>
          <span className={styles.titleLine1}>Brittany's</span>
          <span className={styles.titleLine2}>PET SERVICE</span>
          <div className={styles.homeButton}>
            <a href="https://www.timetopet.com/portal/brittanyspetservice/create-account">
              <button className={styles.button1}>Book Now</button>
            </a>
            <Link onClick={topLoad} to="/services">
              <button className={styles.button2}>Learn More</button>
            </Link>
          </div>
        </div>
        <div className={styles.homeImg}>
          <img className={styles.hometitleImg} src={Dogs} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
