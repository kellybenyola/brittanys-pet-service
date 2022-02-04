import styles from "./Card.module.css";
import React from "react";

function Card(props) {

  const {card} = styles;

  return (
    <div className={card}>
      <div>
        <img className={styles.cardIcon} src={props.icon} alt={props.altText} />
      </div>
      <div>
        <h1 className={styles.cardTitle}>{props.title}</h1>
      </div>
      <div>
        <p className={styles.cardContent}>{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
