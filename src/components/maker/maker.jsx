import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  const updateCard = (card) => {
    console.log(card);
  };
  const deleteCard = (card) => {};
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
