import React, { useEffect, useState, useCallback  } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import style from './Main.module.scss';
import { getGames } from '../../redux/actions/games';
import GameList from './GameList/GameList';
import Preloader from '../Preloader/Preloader';

const Main = (props) => {

    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const games = useSelector(state => state.gamesPage.results);
    // console.log(isFetching)

    // useEffect(() => {
    //     dispatch(getGames())
    // }, [])

    // console.log(games)



    return (
        <div className={style.container}>
            <div className={style.flex_wrapper}>
                {games.map(game => 
                    <GameList game={game} isFetching={isFetching} className={style.flex_item}/>
                )}
            </div>
        </div>
    );
};

export default Main;