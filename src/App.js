import './App.scss';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { getGames, getScreenshotsGame, getDetailsGame, getSameSeries } from './redux/actions/games';
import Preloader from './components/Preloader/Preloader';
import GamePage from './components/GamePage/GamePage';
import { useLocation } from 'react-router';

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

  
  useEffect(() => {
    dispatch(getGames())
  }, [])


  const [gameSlug, setGameSlug] = useState('');
  const [background, setBackground] = useState('');

  const updateGameDetails = (gameSlug, background) => {
    setGameSlug(gameSlug)
    setBackground(background)
  };

  useEffect(() => {
    dispatch(getScreenshotsGame(gameSlug))
  }, [gameSlug, dispatch])

  useEffect(() => {
    dispatch(getDetailsGame(gameSlug))
}, [dispatch, gameSlug])

  useEffect(() => {
    dispatch(getSameSeries(gameSlug))
  }, [dispatch, gameSlug])

  console.log(gameSameSeries)

  if (isFetching) {
    return <Preloader/>
  }

  return (
    <div className="app" 
      style={ 
        location.pathname !== '/' 
        ? { backgroundImage: `linear-gradient(180deg, transparent 0%, #151515 40%), url(${background})`, 
            backgroundBlendMode: 'overlay'}
        : {background: '#151515'}
        }>
      <div className="app__container">
        
        <div className="app__wrapper">
          <Header games={games}/>
          <Routes>
            <Route exact path="/" element={ <Main games={games}/> } />
            <Route path="/games/:gameSlug" element={ <GamePage updateGameDetails={updateGameDetails}/> }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
