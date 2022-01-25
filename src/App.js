import './App.scss';
import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header/>
          <Main/>
        </div>
      </div>
    </div>
  );
}


export default App;
