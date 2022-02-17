import './App.scss';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import { useLocation } from 'react-router';
import AppRouter from './components/AppRouter/AppRouter';
import { BackgroundContext } from './context';
import { checkLocalStorageKeys } from './utils/checkLocalStorageKeys';

function App() {

  const location = useLocation()

  const [bgImage, setBgImage] = useState(null);

  const countGamesInWishlist = checkLocalStorageKeys().length

  const [wishlistCount, setWishlistCount] = useState(countGamesInWishlist);


  const updateBgImage = (image) => {
    setBgImage(image)
  };

  const mainPageClass = {
    background: '#151515'
  }

  const gamePageClass = {
    backgroundImage: `linear-gradient(180deg, 
                      transparent 0%,
                      #151515 40%), 
                      url(${bgImage})`, 
    backgroundBlendMode: 'overlay'
  }



  return (
    <BackgroundContext.Provider value={{updateBgImage, wishlistCount, setWishlistCount}}>
      <div className="app" 
        style={
          bgImage && location.pathname !== '/games'
          ? gamePageClass
          : mainPageClass
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
