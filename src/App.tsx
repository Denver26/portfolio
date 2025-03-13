import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderInfo from "./components/HeaderInfo";
import ProjectContent from "./components/ProjectContent";
import HomeContent from "./components/HomeContent";

import "./App.css";
function App() {
  return (
    <Router>
      <HeaderInfo />
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/projects" element={<ProjectContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
