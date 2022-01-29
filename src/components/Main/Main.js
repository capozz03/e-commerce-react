import React, { useEffect, useState, useCallback  } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import style from './Main.module.scss';
import GameList from './GameList/GameList';

const Main = (props) => {

    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const games = useSelector(state => state.gamesPage.results);


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