import './App.scss';
import React, {useEffect} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { getGames } from './redux/actions/games';
import Preloader from './components/Preloader/Preloader';
import GamePage from './components/GamePage/GamePage';

function App() {

  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.gamesPage.isFetching);
  const game = useSelector(state => state.gamesPage.game);

  console.log(isFetching)

  useEffect(() => {
    dispatch(getGames())
  }, [])

  if (isFetching) {
    return <Preloader/>
  }

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header/>
          <Routes>
            <Route exact path="/" element={ <Main/> } />
            <Route path="/games/:gameSlug" element={ <GamePage /> }/>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}


export default App;
