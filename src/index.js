import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree(state){
  root.render(
    <React.StrictMode>
      <App state={state}
           changeCurrentNameField={store.changeCurrentNameField.bind(store)}
           createNewCategory={store.createNewCategory.bind(store)}
           changeCurrentRecipeNameField={store.changeCurrentRecipeNameField.bind(store)}
           createNewRecipe={store.createNewRecipe.bind(store)}
           changeCurrentTextField={store.changeCurrentTextField.bind(store)}
           changeCurrentCategoryField={store.changeCurrentCategoryField.bind(store)}/>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.state);
store.setSubscriber(rerenderEntireTree);

reportWebVitals();
