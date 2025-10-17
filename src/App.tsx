import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero onChatOpen={() => setIsChatOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Education />
      <Contact />
      <Footer />
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
