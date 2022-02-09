import './App.scss';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import {Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { useLocation } from 'react-router';
import AppRouter from './components/AppRouter/AppRouter';
import { BackgroundContext } from './context';

function App() {

  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.gamesPage.isFetching);
  const games = useSelector(state => state.gamesPage.games);
  const screenshots = useSelector(state => state.gamesPage.screenshots);
  const gameDetails = useSelector(state => state.gamesPage.gameDetails);
  const gameSameSeries = useSelector(state => state.gamesPage.gameSameSeries);

  const location = useLocation()

  console.log('App Component = ', games)
  console.log('App Component screen = ', screenshots)
  console.log('App Component gameDetails = ', gameDetails)

  const [bgImage, setBgImage] = useState(null);

  const updateBgImage = (image) => {
    setBgImage(image)
  };


  return (
    <BackgroundContext.Provider value={{
      updateBgImage
    }}>
      <div className="app" 
        style={ 
          bgImage && location.pathname !== '/games'
          ? { backgroundImage: `linear-gradient(180deg, transparent 0%, #151515 40%), url(${bgImage})`, 
              backgroundBlendMode: 'overlay'}
          : {background: '#151515'}
          }>
        <div className="app__container">
          
          <div className="app__wrapper">
            <Header/>
            <AppRouter/>
          </div>
        </div>
      </div>
    </BackgroundContext.Provider>
    
  );
}


export default App;
