import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigationbar/NavigationBar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import Home from "./pages/Home/Home";

import Notes from "./pages/Notes/Notes";
import FirstNote from "./components/notes/2024/firstnote";
import Classes from "./components/notes/2024/classes";

import Articles from "./pages/Articles/Articles";
import CS415MP1 from "./components/articles/2025/cs415mp1";

import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <ScrollToTop />
      <div className="container">
        <div className="tab-container">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* HOME NOTES */}
            <Route path="/classes" element={<Classes />} />
            <Route path="/firstnote" element={<FirstNote />} />
            <Route path="/cs415mp1" element={<CS415MP1 />} />

            {/* NOTES */}
            <Route path="/Notes" element={<Notes />} />
            <Route path="/Notes/classes" element={<Classes />} />
            <Route path="/Notes/firstnote" element={<FirstNote />} />

            {/* ARTICLES */}
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Articles/cs415mp1" element={<CS415MP1 />} />

            {/* PROJECTS */}
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
