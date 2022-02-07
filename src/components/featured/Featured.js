import React from "react";

import bg from "../../assets/images/misc/joker1.jpg";
import { IoPlaySharp } from "react-icons/io5";

import styles from "./Featured.module.scss";

const Featured = (props) => {
  return (
    <div className={styles.featured}>
      <img className={styles.bg} src={bg} alt="" />
      <div className={styles.overview}>
        <span className={styles.title}>Watch Joker Now</span>
        <span className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          excepturi hic nesciunt sequi, ipsum voluptatibus odio quis ea corrupti
          qui repellat animi adipisci perferendis ullam aliquid tenetur nulla!
          Quis, sint ad. Ullam numquam voluptatibus impedit autem, animi
          expedita neque quis.
        </span>
        <button className={styles.play}>
          <IoPlaySharp className={styles.icon} />
          <span>Play</span>
        </button>
      </div>
    </div>
  );
};

export default Featured;
