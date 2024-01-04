import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { DND_ITMES } from "../constants/DND_ITEM";

const ReactBeautifulDnd = () => {
  //Mock Data
  const [lists, setLists] = useState(DND_ITMES);
  // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  const handleDragEnd = ({ source, destination }: DropResult) => {
    console.log(source, destination);
    // 드롭이 droppable 밖에서 일어났을 경우 바로 return
    if (!destination) return;

    // 드래그가 발생한 위치와 드롭이 발생한 위치가 같을 경우 바로 return
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    //깊은 복사로 바뀐 리스트 관리
    const newLists = JSON.parse(JSON.stringify(lists)) as typeof lists;
    const [targetItem] = newLists.splice(source.index, 1);
    newLists.splice(destination.index, 0, targetItem);
    setLists(newLists);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  // --- requestAnimationFrame 초기화 END

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {lists.map(({ id, title, period, description }, index) => (
              <Draggable
                key={id.toString()}
                draggableId={id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p>{title}</p>
                    <p>{period}</p>
                    <p>{description}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReactBeautifulDnd;
