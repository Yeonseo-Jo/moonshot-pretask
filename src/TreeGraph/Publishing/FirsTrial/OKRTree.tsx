import { OKR_DATA } from "./OKR_DATA";
import "./Varients.css";

/*** Type Definition ***/
export interface TasksTypes {
  index: number;
  Task: string;
}

export interface KeyResultTypes {
  index: number;
  KR: string;
  Tasks: TasksTypes[];
}

/*** Node Element - node가 될 컴포넌트, jsx 요소들 -> 추상화해서 받을수 있도록 구현해야 할듯***/
// Object Node Element
const ObjectBox = ({ text }: { text: string }) => {
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
        {text}
      </div>
      <div className="straight-line"></div>
    </div>
  );
};

// KR Node Element
const KrBox = ({ text }: { text: string }) => {
  return (
    <div className="kr-box">
      <div className="straight-line"></div>
      {/* 이 자리에 children으로 받으면 됨 */}

      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "20px",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        {text}
      </div>
      {/* <input type="text" placeholder={text} /> */}
    </div>
  );
};

// Task Node Element
const TaskBox = ({ TaskText }: { TaskText: string }) => {
  return (
    <div className="task-box">
      <div className="straight-line"></div>
      {/* 이 자리에 children으로 받으면 됨 */}
      <div
        style={{
          backgroundColor: "darkGray",
          color: "white",
          padding: "10px",
          width: "fit-content",
          borderRadius: "10px",
        }}
      >
        {TaskText}
      </div>
    </div>
  );
};

/*** 노드들을 동적으로 연결하는 라인 요소 ***/
// Tree Line Element
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

/** KR Varients Template **/
// KR-Task Pair Element
export const KrTaskConatiner = ({
  KRText,
  Tasks,
}: {
  KRText: string;
  Tasks: TasksTypes[];
}) => {
  return (
    <div
      className="kr-task-container"
      style={{
        display: "flex",
      }}
    >
      <KrBox text={KRText} />
      {Tasks.length !== 0 && (
        <>
          <div className="straight-line"></div>
          <NodeLines />
          <div className="taskbox-wrapper">
            {Tasks.map(({ index, Task }) => {
              return <TaskBox key={index} TaskText={Task} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

// Final KR Element
const KRVarients = ({ KRProps }: { KRProps: KeyResultTypes[] }) => {
  return (
    <div className="krbox-wrapper">
      {KRProps.map(({ index, KR, Tasks }) => {
        return <KrTaskConatiner key={index} KRText={KR} Tasks={Tasks} />;
      })}
    </div>
  );
};

// Final OKR Tree Element
// -> O와 KR를 분리해서 받음
const OKRTreeForm = ({
  Objective,
  KeyResults,
}: {
  Objective: string;
  KeyResults: KeyResultTypes[];
}) => {
  return (
    <div className="okr-tree-form-container">
      <ObjectBox text={Objective} />
      <div className="kr-tree-wrapper">
        <NodeLines />
        <KRVarients KRProps={KeyResults} />
      </div>
    </div>
  );
};

// 사용할 때는 이렇게! -> OKR_DATA로 부터 object, kR 분리하고 OKRTREEForm 불러와서 사용
const OKRTree = () => {
  const { Objective, KeyResults } = OKR_DATA;
  return <OKRTreeForm Objective={Objective} KeyResults={KeyResults} />;
};

export default OKRTree;
