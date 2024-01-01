import { useRef, useState } from "react";
import { DND_ITMES } from "../constants/DND_ITEM";

const DndAPI = () => {
  const dragItem = useRef<number>();
  const dragOverItem = useRef<number>();

  const [list, setList] = useState(DND_ITMES);

  const handleDragStart = (idx: number) => {
    // const position = Number((e.target as HTMLButtonElement).id);
    dragItem.current = idx;
  };

  const hanldeDragEnter = (idx: number) => {
    dragOverItem.current = idx;
  };

  const hanldeDrop = () => {
    const newList = [...list];
    if (!dragItem.current?.toString() || !dragOverItem.current?.toString)
      return;

    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);

    newList.splice(dragOverItem.current, 0, dragItemValue);

    dragItem.current = undefined;
    dragOverItem.current = undefined;

    setList(newList);
  };

  return (
    <section>
      <h2>직접 구현하기 - by html drag and drop api</h2>

      <article
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {list &&
          list.map(({ id, title, period, description }, idx) => {
            return (
              <button
                key={id}
                style={{
                  border: "1px solid black",
                  backgroundColor: "gray",
                }}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragEnter={() => hanldeDragEnter(idx)}
                onDragEnd={() => hanldeDrop()}
                onDragOver={(e) => e.preventDefault()}
              >
                <p>{title}</p>
                <p>{period}</p>
                <p>{description}</p>
              </button>
            );
          })}
      </article>
    </section>
  );
};

export default DndAPI;
