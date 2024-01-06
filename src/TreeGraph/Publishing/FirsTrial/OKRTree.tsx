import { KrVarients } from "./KrVarients";
import { ThreeTasks, TwoTasks } from "./TaskVarients";
import "./Varients.css";

const ObjectBox = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "30px",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        더 많은 구매 전환을 일으키는 높은 품질의 웹사이트를 런칭한다
      </div>
      <div className="straight-line"></div>
    </div>
  );
};

export const NodeLines = () => {
  return (
    <div className="node-line-container">
      {/* <div className="node-transparent-line"></div> */}
      <div className="node-lines"></div>
      <div className="node-m-line"></div>
      <div className="node-lines"></div>
      {/* <div className="node-transparent-line"></div> */}
    </div>
  );
};

const OKRTree = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ObjectBox />
      <div className="kr-tree-wrapper">
        <NodeLines />
        <KrVarients
          FirstTaskVarients={ThreeTasks}
          SecondTaskVarients={TwoTasks}
        />
      </div>
    </div>
  );
};

export default OKRTree;
