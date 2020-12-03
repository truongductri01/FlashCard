const { useState, useEffect } = require("react");
const { db } = require("../firebase/config");

const useFirestore = (collection) => {
  const [cards, setCards] = useState([]);

  // Retrieve the cards and render it to the screen

  useEffect(() => {
    db.collection("cards")
      .orderBy("createAt", "desc")
      .onSnapshot((snap) => {
        let cardsList = [];
        snap.forEach((doc) => {
          cardsList.push({ ...doc.data(), id: doc.id });
        });

        setCards(cardsList);

        console.log("Data >>>>", cardsList);
      });
  }, [collection]);

  // Return cards to later renders
  console.log("Cards >>>", cards);
  return { cards };
};

export default useFirestore;
