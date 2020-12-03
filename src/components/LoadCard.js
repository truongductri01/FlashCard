import React, { useEffect, useState } from "react";
import { db, timestamp } from "../firebase/config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoadCard() {
  const [card, setCard] = useState(null);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    console.log("Card Changed >>>", card);

    //   Load the Card to Firebase FireStore
    if (card) {
      db.collection("cards").add({ ...card, createAt: timestamp() });
    }
  }, [card]);

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(word, definition);

    if (word.length > 0 && definition.length > 0) {
      setCard({ word: word, definition: definition });
    }

    console.log("Done");

    setWord("");
    setDefinition("");

    console.log("Word and Def >>>", word, definition);
  };

  return (
    <div className="loadCard">
      <Form>
        <Form.Group>
          <Form.Label>Card's Word</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Card's Definition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Button
        variant="outline-primary"
        className="loadCard_button"
        onClick={submitHandle}
      >
        Create
      </Button>
    </div>
  );
}

export default LoadCard;
