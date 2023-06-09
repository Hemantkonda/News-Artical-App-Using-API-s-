import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Hemant from './components/Hemant';


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/test" Component={Hemant} />
      </Routes>
      <Footer />
    </>
  );
}
