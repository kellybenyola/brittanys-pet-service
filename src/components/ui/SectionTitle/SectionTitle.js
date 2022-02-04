import styles from "./SectionTitle.module.css";
import React from "react";
function SectionTitle(props) {
  return (
    <div className={styles.SectionTitleDiv}>
      <span className={styles.sectionTitle}>{props.title}</span>
    </div>
  );
}

export default SectionTitle;
