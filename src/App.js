import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./modules/headerModule/Header";
import Navigation from "./modules/navigationModule/Navigation";
import Content from "./modules/contentModule/Content";
import Footer from "./modules/footerModule/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <div className="app">
          <Header/>
          <Navigation/>
          <Content className='main-content'/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
