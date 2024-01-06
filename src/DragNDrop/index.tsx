import React, { useState } from "react";
import DndAPI from "./components/DndAPI";
import ReactBeautifulDnd from "./components/ReactBeautifulDnd";
import DndContainer from "./components/ReactDnd/DndContainer";

const DragNDrop = () => {
  const METHOD_BTNS = [
    { id: 1, method: "직접 구현하기" },
    { id: 2, method: "react-beautiful-dnd 사용" },
    { id: 3, method: "react-dnd 사용" },
  ];

  const [targetMethod, setTargetMethod] = useState<number>();

  const handleClickMethodBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetId = (e.target as HTMLButtonElement).id;
    setTargetMethod(Number(targetId));
  };

  const renderMethod = () => {
    switch (targetMethod) {
      case 1:
        return <DndAPI />;
      case 2:
        return <ReactBeautifulDnd />;
      case 3:
        return <DndContainer />;
    }
  };

  return (
    <main>
      <header>
        <h1>DragNDrop 기능 연습</h1>
      </header>
      <nav style={{ display: "flex", gap: "1rem" }}>
        {METHOD_BTNS.map(({ id, method }) => {
          return (
            <button key={id} id={id.toString()} onClick={handleClickMethodBtn}>
              {id}. {method}
            </button>
          );
        })}
      </nav>
      {renderMethod()}
    </main>
  );
};

export default DragNDrop;
