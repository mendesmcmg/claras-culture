import { Routes, Route } from "react-router-dom";
import Content from "./pages/Content/Content";
import Home from "./pages/Home/Home";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}

export default RoutesComponent;
