import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragNDrop from "./DragNDrop";
import TreeGraph from "./TreeGraph";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/drag-n-drop" element={<DragNDrop />} />
        <Route path="/tree-graph" element={<TreeGraph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
