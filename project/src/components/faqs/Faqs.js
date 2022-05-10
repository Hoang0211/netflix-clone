import React, { useState } from 'react';

import FaqItem from './FaqItem';
import RegForm from '../form/regForm/RegForm';
import { faqs } from '../../data/faqs-data';
import styles from './Faqs.module.scss';

const Faqs = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  const updateCurrentQuestion = (id, isShowing) => {
    if (isShowing) {
      faqs.find((faq) => faq.id === currentQuestionId).show = false;
      setCurrentQuestionId(null);
    } else {
      if (currentQuestionId) {
        faqs.find((faq) => faq.id === currentQuestionId).show = false;
      }
      setCurrentQuestionId(id);
      faqs.find((faq) => faq.id === id).show = true;
    }
  };

  return (
    <div className={styles.faqs}>
      <div className={styles['faqs-container']}>
        <span className={styles.title}>Frequently Asked Questions</span>
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            id={faq.id}
            header={faq.header}
            body={faq.body}
            show={faq.show}
            updateCurrentQuestion={updateCurrentQuestion}
          />
        ))}
      </div>
      <RegForm />
    </div>
  );
};

export default Faqs;
