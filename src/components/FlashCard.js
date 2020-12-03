import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import ModalForm from "./ModalForm";

function FlashCard({ word, definition }) {
  /*
    -------------------------
    A Flash Card need:
    1. A word or a term to trigger memory
    2. Definition or explanation on the back

    Code:
    1. Card is an object: 
        Word and definition
        Card = {
        "word": "Cat",
        "definition": "Meow meow"
        }
    -------------------------
    */
  const [card, setCard] = useState(null);
  const [click, setClick] = useState(0);

  // eslint-disable-next-line
  useEffect(() => {
    const cardObject = {
      word: word,
      definition: definition,
    };
    setCard(cardObject);

    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    if (click === 0) {
      setClick(1);
    } else {
      setClick(0);
    }

    console.log("Changed, Click is >>>>", click);
  };

  const element = (value) => {
    return (
      <Card>
        <Card.Header className="flashCard_header">Word</Card.Header>
        <Card.Body className="flashCard_body">
          <Card.Title>{value}</Card.Title>
          <Card.Text>Hint?</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const modal = (word, definition) => {
    return (
      <ModalForm
        word={word}
        definition={definition}
        handleClick={handleClick}
      />
    );
  };

  // Need to know what to show first based on clicked
  return (
    <motion.div
      className="flashCard"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {card &&
        (click === 0 ? element(card.word) : modal(card.word, card.definition))}
    </motion.div>
  );
}

export default FlashCard;
