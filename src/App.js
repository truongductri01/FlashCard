import React from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
import LoadCard from "./components/LoadCard";
import Title from "./components/Title";
import useFirestore from "./hooks/useFirestore";

function App() {
  const { cards } = useFirestore("cards");
  console.log("Cards in App >>>", cards);

  const cardsJSX = cards.map((card) => (
    <FlashCard key={card.id} word={card.word} definition={card.definition} />
  ));

  console.log({ App }, cardsJSX);

  return (
    <div className="app">
      <Title />
      <LoadCard />

      <div className="flashCards_container">{cards && cardsJSX}</div>
    </div>
  );
}

export default App;
