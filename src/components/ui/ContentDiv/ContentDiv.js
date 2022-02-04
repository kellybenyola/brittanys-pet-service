import React from "react";
import styles from "./ContentDiv.module.css";

const ContentDiv = ({children}) => {
  const {div} = styles;
 
  return (
    <div className={div}>
      {children}
    </div>
  );
};

export default ContentDiv;
