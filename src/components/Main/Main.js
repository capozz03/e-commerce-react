import React, { useEffect, useState, useCallback  } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import style from './Main.module.scss';
import { getGames } from '../../redux/actions/games';
import GameList from './GameList/GameList';
import axios from 'axios';

const Main = () => {

    const dispatch = useDispatch();
    const games = useSelector(state => state.gamesPage.results)

    useEffect(() => {
        dispatch(getGames())
    }, [])

    console.log(games)



    return (
        <div className={style.container}>
            <div className={style.flex_wrapper}>
                
                {games.map(game => 
                    <GameList game={game} className={style.flex_item}/>
                )}
            </div>
        </div>
    );
};

export default Main;