import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragNDrop from "./DragNDrop";
import Home from "./Home";
import HierarchyChart from "./TreeGraph/HierarchyChart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag-n-drop" element={<DragNDrop />} />
        <Route path="/tree-graph" element={<HierarchyChart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
