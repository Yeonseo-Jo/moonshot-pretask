import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragNDrop from "./DragNDrop";
import Home from "./Home";
import HierarchyChart from "./TreeGraph/HierarchyChart";
import OKRTree from "./TreeGraph/Publishing/FirsTrial/OKRTree";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag-n-drop" element={<DragNDrop />} />
        <Route path="/tree-graph" element={<HierarchyChart />} />
        <Route path="/okr-tree" element={<OKRTree />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
