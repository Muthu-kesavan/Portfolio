import './App.css';
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Courseworks from './pages/Courseworks'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay';
import CourseDisplay from './pages/CourseDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Courseworks" element={<Courseworks />} />
          <Route path="/project/:id" element={<ProjectDisplay />}></Route>
          <Route path="/Coursework/:id" element={<CourseDisplay/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;