import React from "react";
import styles from "./button.module.scss";

const Button = () => {
  return (
    <div className={styles.btn_area}>
      <a href="#" className={styles.btn}>
        TOP
      </a>
    </div>
  );
};

export default Button;
