import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./modules/headerModule/Header";
import Navigation from "./modules/navigationModule/Navigation";
import Content from "./modules/contentModule/Content";
import Footer from "./modules/footerModule/Footer";


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <div className="app">
          <Header/>
          <Navigation state={props.state}
                      changeCurrentNameField={props.changeCurrentNameField}
                      createNewCategory={props.createNewCategory}/>
          <Content className='main-content' state={props.state}
                                            changeCurrentRecipeNameField={props.changeCurrentRecipeNameField}
                                            createNewRecipe={props.createNewRecipe}
                                            changeCurrentTextField={props.changeCurrentTextField}
                                            changeCurrentCategoryField={props.changeCurrentCategoryField}/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
