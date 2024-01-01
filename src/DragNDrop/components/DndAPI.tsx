import { useRef, useState } from "react";
import { DND_ITMES } from "../constants/DND_ITEM";

const DndAPI = () => {
  //드래그 한 아이템의 인덱스
  const dragItem = useRef<number>();
  //드랍한 위치에 있는 아이템의 인덱스
  const dragOverItem = useRef<number>();
  //dnd로 변화하는 아이템 값 관리
  const [list, setList] = useState(DND_ITMES);

  //드래그 시작될 때
  const handleDragStart = (idx: number) => {
    dragItem.current = idx;
  };

  //드래그 중 대상이 위로 포개졌을 때
  const hanldeDragEnter = (idx: number) => {
    dragOverItem.current = idx;
  };

  //드랍 했을 때 (커서 땠을 때)
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
