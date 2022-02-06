import React from 'react';
import style from './GameList.module.scss';
import {Link} from 'react-router-dom';
import { iconsTransform } from '../../../utils/iconsTransform';
import { dateTransform } from '../../../utils/dateTransform';
import { useSelector } from 'react-redux';

const GameList = (props) => {

    const game = props.game;
    const isFetching = useSelector(state => state.gamesPage.isFetching);
    
    return (
        <div className={style.game__wrapper}>
           <div className={style.item}>
               <div className={style.item__media}>
                    <img src={game.background_image} alt='img' className={style.media__image}/>
               </div>
               <div className={style.item__info}>
                    <div className={style.flex__wrapper}>
                        <div className={style.item__info__meta}>
                            {iconsTransform(game.parent_platforms)}
                        </div>
                        {game.metacritic 
                            ? 
                            <div className={style.item__info__metascore}>
                                {game.metacritic}
                            </div>
                            :
                            null
                        }
                        
                    </div>
                    <div className={style.item__info__name}>
                        <Link to={`games/${game.slug}`}
                            state={{
                                gameIcons: game.parent_platforms}} >
                            {game.name}
                        </Link>
                    </div>
                    <div className={style.item__dropdown}>
                        <ul>
                            <li>
                                <div className={style.game__card__about__term}>Release Date:</div>
                                <div className={style.game__card__about__description}>{dateTransform(game.released)}</div>
                            </li>
                            <li>
                                <div className={style.game__card__about__term}> Genres:</div>
                                <div className={style.game__card__about__description}>{game.genres.map(genre => {
                                    return genre.name
                                }).join(', ')}</div>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default GameList;