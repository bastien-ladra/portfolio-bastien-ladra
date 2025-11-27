import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CVCyber from "./pages/CVCyber";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cv-cyber" element={<CVCyber />} />
      </Routes>
    </Router>
  );
}

export default App;
