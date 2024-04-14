import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
