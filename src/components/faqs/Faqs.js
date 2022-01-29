import React, { useState } from "react";

import FaqItem from "./FaqItem";

import styles from "./Faqs.module.scss";

const faqs = [
  {
    id: 1,
    header: "What is Netflix?",
    body: (
      <>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV programmes, films, anime, documentaries and more on
        thousands of internet-connected devices.
        <br />
        <br />
        You can watch as much as you want, whenever you want, without a single
        advert all for one low monthly price. There's always something new to
        discover, and new TV programmes and films are added every week!
      </>
    ),
    show: false,
  },
  {
    id: 2,
    header: "How much does Netflix cost?",
    body: (
      <>
        Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming
        device, all for one low fixed monthly fee. Plans start from £5.99 a
        month. No extra costs or contracts.
      </>
    ),
    show: false,
  },
  {
    id: 3,
    header: "Where can I watch?",
    body: (
      <>
        Watch anywhere, anytime, on an unlimited number of devices. Sign in with
        your Netflix account to watch instantly on the web at netflix.com from
        your personal computer or on any internet-connected device that offers
        the Netflix app, including smart TVs, smartphones, tablets, streaming
        media players and game consoles.
        <br />
        <br />
        You can also download your favourite programmes with the iOS, Android,
        or Windows 10 app. Use downloads to watch while you're on the go and
        without an internet connection. Take Netflix with you anywhere.
      </>
    ),
    show: false,
  },
  {
    id: 4,
    header: "How do I cancel?",
    body: (
      <>
        Netflix is flexible. There are no annoying contracts and no commitments.
        You can easily cancel your account online in two clicks. There are no
        cancellation fees start or stop your account at any time.
      </>
    ),
    show: false,
  },
  {
    id: 5,
    header: "What can I watch on Netflix?",
    body: (
      <>
        Netflix has an extensive library of feature films, documentaries, TV
        programmes, anime, award-winning Netflix originals, and more. Watch as
        much as you want, any time you want.
      </>
    ),
    show: false,
  },
];

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
      <div className={styles["faqs-container"]}>
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
    </div>
  );
};

export default Faqs;
