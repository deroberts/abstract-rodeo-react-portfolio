import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from '../sections/AboutMe';
import Contact from '../sections/Contact';
import Portfolio from '../sections/Portfolio';
import Resume from '../sections/Resume';
import Footer from '../components/Footer';

export const ThemeContext = createContext();

const MainPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Header>
          <Navigation />
        </Header>
        <main>
          <Routes>
            <Route path="/" exact>
              {/* <>
              <h1>Welcome to my portfolio!</h1>
              </> */}
            </Route>
                      
                      
                      
                  <Route path="/about-me">
                      <Route>
                        <AboutMe />
                      </Route>
                    </Route>
                    <Route path="/contact">
                      <Route>
                        <Contact />
                      </Route>
                    </Route>
                    <Route path="/portfolio">
                      <Route>
                        <Portfolio />
                      </Route>
                    </Route>
                    <Route path="/resume">
                      <Route>
                        <Resume />
                      </Route>
                    </Route>








          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default MainPage;
