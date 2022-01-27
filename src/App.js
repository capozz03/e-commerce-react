import './App.scss';
import React, {useEffect} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { getGames } from './redux/actions/games';
import Preloader from './components/Preloader/Preloader';

function App() {

  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.gamesPage.isFetching);
  console.log(isFetching)

  useEffect(() => {
    dispatch(getGames())
  }, [])

  return (
    <div className="app">
      { isFetching ? <Preloader/> 
      :
      <div className="app__container">
        <div className="app__wrapper">
          <Header/>
          <Main/>
        </div>
      </div>
      }
      
    </div>
  );
}


export default App;
