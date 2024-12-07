import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationbar/NavigationBar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import Articles from "./pages/Articles/Articles";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="container">
        <div className="tab-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
