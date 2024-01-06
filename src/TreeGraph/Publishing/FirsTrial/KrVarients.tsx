import { NodeLines } from "./OKRTree";
import "./Varients.css";

const KrBox = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="straight-line"></div>
      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "20px",
          width: "fit-content",
          borderRadius: "15px",
        }}
      >
        구매 전환 30% 증가
      </div>
      <div className="straight-line"></div>
    </div>
  );
};

export const KrTaskConatiner = ({
  TaskVarients,
}: {
  TaskVarients: () => JSX.Element;
}) => {
  return (
    <div
      className="kr-task-container"
      style={{
        display: "flex",
      }}
    >
      <KrBox />
      <NodeLines />
      <TaskVarients />
    </div>
  );
};

// export const OneKr = ({
//   TaskVarients,
// }: {
//   TaskVarients: () => JSX.Element;
// }) => {
//   return (
//     <>
//       <KrTaskConatiner TaskVarients={TaskVarients} />
//     </>
//   );
// };

// export const TwoKr = ({
//   FirstTaskVarients,
//   SecondTaskVarients,
// }: {
//   FirstTaskVarients: () => JSX.Element;
//   SecondTaskVarients: () => JSX.Element;
// }) => {
//   return (
//     <div className="krbox-wrapper">
//       <KrTaskConatiner TaskVarients={FirstTaskVarients} />
//       <KrTaskConatiner TaskVarients={SecondTaskVarients} />
//     </div>
//   );
// };

// export const ThreeKr = ({
//   FirstTaskVarients,
//   SecondTaskVarients,
//   ThirdTaskVarients,
// }: {
//   FirstTaskVarients: () => JSX.Element;
//   SecondTaskVarients: () => JSX.Element;
//   ThirdTaskVarients: () => JSX.Element;
// }) => {
//   return (
//     <div className="krbox-wrapper">
//       <KrTaskConatiner TaskVarients={FirstTaskVarients} />
//       <KrTaskConatiner TaskVarients={SecondTaskVarients} />
//       <KrTaskConatiner TaskVarients={ThirdTaskVarients} />
//     </div>
//   );
// };

export const KrVarients = ({
  FirstTaskVarients,
  SecondTaskVarients,
  ThirdTaskVarients,
}: {
  FirstTaskVarients?: () => JSX.Element;
  SecondTaskVarients?: () => JSX.Element;
  ThirdTaskVarients?: () => JSX.Element;
}) => {
  return (
    <div className="krbox-wrapper">
      {FirstTaskVarients && (
        <KrTaskConatiner TaskVarients={FirstTaskVarients} />
      )}
      {SecondTaskVarients && (
        <KrTaskConatiner TaskVarients={SecondTaskVarients} />
      )}
      {ThirdTaskVarients && (
        <KrTaskConatiner TaskVarients={ThirdTaskVarients} />
      )}
    </div>
  );
};
