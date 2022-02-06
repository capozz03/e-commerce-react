import React from 'react';
import { useSelector } from 'react-redux';
import style from './Main.module.scss';
import GameList from './GameList/GameList';
import Preloader from '../Preloader/Preloader';

const Main = (props) => {

    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const games = props.games

    console.log('Main Component = ', games)

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