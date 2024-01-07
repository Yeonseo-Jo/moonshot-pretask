import { INode, ReactHiererchyChart } from "react-hierarchy-chart";
import "./HierarchyChart.css";

const HierarchyChart = () => {
  interface custNode extends INode {
    name: string;
    childs?: custNode[];
  }

  const nodes: custNode[] = [
    {
      name: "Object",
      cssClass: "level1",
      childs: [
        {
          name: "KR 1",
          cssClass: "level2",
          childs: [
            {
              name: "First Task",
              cssClass: "level3",
            },
            {
              name: "Second Task",
              cssClass: "level3",
            },
          ],
        },
        {
          name: "KR 2",
          cssClass: "level2",
          childs: [
            {
              name: "First Task",
              cssClass: "level3",
            },
            {
              name: "Second Task",
              cssClass: "level3",
            },
            {
              name: "Third Task",
              cssClass: "level3",
            },
          ],
        },
        {
          name: "KR 3",
          cssClass: "level2",
          childs: [
            {
              name: "First Task",
              cssClass: "level3",
            },
            {
              name: "Second Task",
              cssClass: "level3",
            },
            {
              name: "Third Task",
              cssClass: "level3",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <h1>Horizontal View</h1>
      <div
        className="hierarchy-viewer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <ReactHiererchyChart
          nodes={nodes}
          direction="horizontal"
          randerNode={(node: custNode) => {
            return (
              <div
                style={{
                  width: "fit-content",
                  height: "fit-contet",
                  padding: "5px",
                  border: "none !important",
                  backgroundColor: "whiteSmoke",
                }}
              >
                <input type="text" />
                <span>{node.name} </span>
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default HierarchyChart;
