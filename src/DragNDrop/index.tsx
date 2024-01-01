import React, { useState } from "react";
import DndAPI from "./components/DndAPI";

const DragNDrop = () => {
  const METHOD_BTNS = [
    { id: 1, method: "직접 구현하기" },
    { id: 2, method: "어쩌고 라이브러리 사용" },
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
