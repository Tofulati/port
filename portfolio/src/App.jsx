import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import ResearchPage from "./pages/ResearchPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Albert Ho. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App
