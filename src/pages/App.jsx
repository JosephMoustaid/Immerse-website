import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import SearchResult from './pages/SearchResult';
import SingleCourse from './pages/SingleCourse';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  window.addEventListener('scroll', reveal);
  function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i=0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }else{
          reveals[i].classList.remove('active');
        }
      }
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:categorie" element={<CourseList />} />
          <Route path="/courses/search/:query" element={<SearchResult />} />
          <Route path="/course" element={<SingleCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
