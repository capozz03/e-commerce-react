import React from 'react';
import style from './GameList.module.scss';
const GameList = (props) => {
    const game = props.game;

    return (
        <div className={style.game__wrapper}>
           <div className={style.game__wrapper__item}>
               <div className={style.media}>
                    <img src={game.background_image} alt='img' className={style.image}/>
               </div>
               <div className={style.info}>
                    {game.name}
               </div>
               
            </div>
            {/* <ul>
                <li>{game.name}</li>
                <li>{game.rating}</li>
                <li>{game.added}</li>
                <li>{game.metacritic}</li>
            </ul> */}
        </div>
    );
};

export default GameList;