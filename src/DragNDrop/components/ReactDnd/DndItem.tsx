import { useDrag, useDrop } from "react-dnd";
import { IItem } from "../../types/ItmeTypes";

interface IDndItemProps extends IItem {
  moveCard: (id: number, adIndex: number) => void;
  findCard: (id: number) => {
    card: IItem;
    index: number;
  };
}

const style = {
  border: "2px solid black",
  margin: "0.5rem",
  width: "300px",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "pointer",
  flexShrink: "0",
};

const DndItem = ({
  id,
  title,
  period,
  description,
  moveCard,
  findCard,
}: IDndItemProps) => {
  const originalIndex = findCard(id).index;

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "dndItem", //드래깅 물체 타입 -> useDrop의 accept랑 맞춰줘야 함. 따로 빼서 관리하기도 함
      item: { id, originalIndex }, //드래깅 물체 안에 넣어줄 정보
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        //드래그가 끝났을때 작동하는 부분.
        const { id: originId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          //didDrop이 !(아니다)라는 것은 dropRef로 선언한 태그위에 드랍되지 않음 을 의미한다.
          //그때는 원래의 위치대로 이동.
          moveCard(originId, originalIndex); //카드 이동
        }

        console.log(`drop card ${originId}`);
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: "dndItem",
      hover({ id: draggedId }: IDndItemProps) {
        if (draggedId !== id) {
          // hover된 요소와 index 교환! -> 위치 교환
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      style={{ ...style, opacity: isDragging ? 0.4 : 1 }}
    >
      <p>{title}</p>
      <p>{period}</p>
      <p>{description}</p>
    </div>
  );
};

export default DndItem;
