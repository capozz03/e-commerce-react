import React from 'react';
import style from './GameList.module.scss';
import {useNavigate} from 'react-router-dom';
import { iconsTransform } from '../../utils/iconsTransform';
import { dateTransform } from '../../utils/dateTransform';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const GameList = ({ game }) => {

    const navigate = useNavigate()

    return (
        <div className={style.game__wrapper}>
           <div className={style.item}>
                <div className={style.item__media}>
                    <LazyLoadImage
                        className={style.media__image}
                        alt={game.name}
                        src={game.background_image}
                        effect='blur'
                        width='100%'
                    />
                </div>
               <div className={style.item__info}>
                    <div className={style.flex__wrapper}>
                        <div className={style.item__info__meta}>
                            {iconsTransform(game.parent_platforms)}
                        </div>
                        {!game.metacritic ? null :
                            <div className={style.item__info__metascore}>
                                {game.metacritic}
                            </div>   
                        }
                    </div>
                    <div 
                        className={style.item__info__name} 
                        onClick={() => navigate(`/games/${game.slug}`)}
                    >
                        {game.name}
                    </div>
                    <div className={style.item__dropdown}>
                        <ul>
                            <li>
                                <div className={style.game__card__about__term}>Release Date:</div>
                                <div className={style.game__card__about__description}>{dateTransform(game.released)}</div>
                            </li>
                            <li>
                                <div className={style.game__card__about__term}> Genres:</div>
                                <div className={style.game__card__about__description}>{game.genres.map(genre =>
                                    genre.name
                                ).join(', ')}</div>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default GameList;