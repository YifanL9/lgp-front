import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Onboard from "./pages/Onboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboard" element={<Onboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
