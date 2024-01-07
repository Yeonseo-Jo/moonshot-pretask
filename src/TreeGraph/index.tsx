import Tree from "react-d3-tree";

const treeData = {
  name: "Objective(O)",
  children: [
    {
      name: "KR 1",
      children: [
        {
          name: "First Task",
          onClick: () => console.log("Child Node 1 clicked"),
        },
        { name: "Second Task" },
        { name: "Third Task" },
      ],
    },
    {
      name: "KR 2",
      children: [
        { name: "First Task" },
        { name: "Second Task" },
        { name: "Third Task" },
      ],
    },
    {
      name: "KR 3",
      children: [
        { name: "First Task" },
        { name: "Second Task" },
        { name: "Third Task" },
      ],
    },
  ],
};

const TreeGraph = () => {
  return (
    <div
      id="treeWrapper"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tree
        data={treeData}
        pathFunc="step"
        nodeSize={{ x: 200, y: 40 }}
        translate={{ x: 400, y: 300 }}
      />
    </div>
  );
};

export default TreeGraph;

// const TreeGraph = () => {
//   const shouldRecenterTreeRef = useRef(true);
//   const [treeTranslate, setTreeTranslate] = useState({ x: 0, y: 0 });
//   const treeContainerRef = useRef(null);

//   useEffect(() => {
//     if (treeContainerRef.current && shouldRecenterTreeRef.current) {
//       shouldRecenterTreeRef.current = false;
//       const dimensions = treeContainerRef.current.getBoundingClientRect();

//       setTreeTranslate({
//         x: dimensions.width / 2,
//         y: 150,
//       });
//     }
//   });

//   return (
//     <div ref={treeContainerRef} style={{ height: "70rem" }}>
//       <Tree
//         data={treeData}
//         collapsible={false}
//         pathFunc="step"
//         translate={treeTranslate}
//         orientation="horizontal"
//         nodeSize={{ x: 100, y: 70 }}
//       />
//     </div>
//   );
// };

// export default TreeGraph;

// const TreeGraph = () => {
//   const nodeSize = { x: 300, y: 60 };

//   return (
//     <main style={{ width: "100%", height: "100vh" }}>
//       <section
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Tree
//           data={datum}
//           pathFunc="step" // or "diagonal"
//           nodeSize={nodeSize}
//           orientation="horizontal"
//           draggable={false}
//           // zoomable={false}
//           renderCustomNodeElement={(rd3tProps) =>
//             renderForeignObjectNode({
//               ...rd3tProps,
//               foreignObjectProps: {
//                 width: nodeSize.x * 0.75,
//                 height: nodeSize.y,
//                 y: 32,
//                 x: -(nodeSize.x * 0.75) / 2,
//               },
//             })
//           }
//           rootNodeClassName="node__root"
//           branchNodeClassName="node__branch"
//           leafNodeClassName="node__leaf"
//         />
//       </section>
//     </main>
//   );
// };

// const renderForeignObjectNode = ({
//   nodeDatum,
//   toggleNode,
//   foreignObjectProps,
// }) => {
//   // console.log(nodeDatum);
//   const { expression, promotionId } = { ...nodeDatum.attributes };
//   const isBranchNode = !!nodeDatum.children;
//   const isLeafNode = !nodeDatum.children;
//   const isRootNode = nodeDatum.__rd3t.depth === 0;

//   if (isRootNode) {
//     return (
//       <g strokeWidth={0}>
//         <rect x="-100" y="-18" width="200" height="36" fill="#a353ff" rx="4" />
//         <foreignObject {...foreignObjectProps} x="-92" y="-12">
//           <div style={{ color: "#fff" }}>{nodeDatum.name}</div>
//         </foreignObject>
//       </g>
//     );
//   }

//   return (
//     <g onClick={toggleNode} strokeWidth={0}>
//       {(isLeafNode || isBranchNode) && (
//         <>
//           <rect
//             x="-100"
//             y="-18"
//             width="200"
//             height="36"
//             fill="#a879da"
//             rx="4"
//           />
//           <foreignObject
//             {...foreignObjectProps}
//             height="120px"
//             width="500px"
//             x="-92"
//             y="-12"
//           >
//             <div style={{ color: "#fff" }}>{nodeDatum.name}</div>
//           </foreignObject>
//         </>
//       )}
//       {/* `foreignObject` requires width & height to be explicitly set. */}
//     </g>
//   );
// };
// export default TreeGraph;
