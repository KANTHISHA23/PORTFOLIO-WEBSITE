import React, { useEffect, useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactMe from './components/ContactMe/ContactMe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // 1.8 seconds delay
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Intro />
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <ContactMe />
          <Footer />

          <ToastContainer
            position='bottom-right'
            autoClose={3000}
            theme='dark'
            pauseOnHover
            closeOnClick
          />
        </>
      )}
    </div>
  );
}

export default App;
