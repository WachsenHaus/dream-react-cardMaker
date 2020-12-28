import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "elli@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: "elli.png",
    },
    2: {
      id: "2",
      name: "qwe",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "elli@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
    3: {
      id: "3",
      name: "asd",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "elli@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileUrl: "elli.png",
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrupdateCard = (card) => {
    //set시점에 이전값으로 작업을 진행함.
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
