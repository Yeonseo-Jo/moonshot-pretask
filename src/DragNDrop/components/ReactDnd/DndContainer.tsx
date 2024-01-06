import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DND_ITMES } from "../../constants/DND_ITEM";
import DndItem from "./DndItem";

const DndContainer = () => {
  const [cards, setCards] = useState(DND_ITMES);

  const findCard = useCallback(
    (id: number) => {
      const card = cards.filter((item) => item.id === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id: number, addIndex: number) => {
      const { card, index } = findCard(id);
      //   setCards(
      //     update(cards, {
      //       $splice: [
      //         [index, 1],
      //         [addIndex, 0, card],
      //       ],
      //     })
      //   );
      const newCards = [...cards];
      newCards.splice(index, 1);
      newCards.splice(addIndex, 0, card);
      setCards(newCards);
    },
    [findCard, cards, setCards]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gray",
        }}
      >
        {cards.map(({ id, title, period, description }) => (
          <DndItem
            key={id}
            id={id}
            title={title}
            period={period}
            description={description}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DndContainer;
