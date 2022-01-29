import React, { useState, useEffect } from "react";

import close from "../../assets/images/icons/close-slim.png";
import add from "../../assets/images/icons/add.png";

import styles from "./FaqItem.module.scss";

const FaqItem = (props) => {
  const [showAnswer, setShowAnswer] = useState(props.show);

  useEffect(() => {
    setShowAnswer(props.show);
  }, [props.show]);

  const showAnswerHandler = () => {
    props.updateCurrentQuestion(props.id, showAnswer);
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className={styles.faq}>
      <div className={styles["header-container"]} onClick={showAnswerHandler}>
        <span className={styles.header}>{props.header}</span>
        {showAnswer ? (
          <img className={styles.icon} src={close} alt="Close" />
        ) : (
          <img className={styles.icon} src={add} alt="Open" />
        )}
      </div>
      <div
        className={`${styles.body} ${showAnswer ? styles.open : styles.close}`}
      >
        <span>{props.body}</span>
      </div>
    </div>
  );
};

export default FaqItem;
