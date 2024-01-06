import "./Varients.css";

const TaskBox = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="straight-line"></div>
      <div
        style={{
          backgroundColor: "darkGray",
          color: "white",
          padding: "10px",
          width: "fit-content",
          borderRadius: "10px",
        }}
      >
        새로운 디자인 시안 3개를 만든다
      </div>
    </div>
  );
};

export const OneTasks = () => {
  return (
    <>
      <TaskBox />
    </>
  );
};

export const TwoTasks = () => {
  return (
    <div className="taskbox-wrapper">
      <TaskBox />
      <TaskBox />
    </div>
  );
};

export const ThreeTasks = () => {
  return (
    <div className="taskbox-wrapper">
      <TaskBox />
      <TaskBox />
      <TaskBox />
    </div>
  );
};
