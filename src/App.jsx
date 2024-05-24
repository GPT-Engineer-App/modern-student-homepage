import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Homework from "./pages/Homework.jsx";
import InteractiveTools from "./pages/InteractiveTools.jsx";
import Performance from "./pages/Performance.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/interactive-tools" element={<InteractiveTools />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;
