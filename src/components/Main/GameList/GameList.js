import React from 'react';
import style from './GameList.module.scss';
import { 
    FaWindows, 
    FaPlaystation, 
    FaXbox, 
    FaApple,
    FaLinux,
    FaNeos
} from 'react-icons/fa';
import GamePage from '../../GamePage/GamePage';
import {Routes, Route, NavLink} from 'react-router-dom';

const GameList = (props) => {
    const game = props.game;
    const metacritic = game.metacritic;
    

    const platforms = {
        'PC': FaWindows,
        'PlayStation': FaPlaystation,
        'Xbox': FaXbox,
        'Mac': FaApple,
        'Linux': FaLinux,
        'Nintendo': FaNeos,
    };

    let showIconsSpeciality = (nameIcon, i) => { 
        return React.createElement(
        'span',
        { key: i },
        React.createElement(nameIcon , {
          name: nameIcon,
          style: {
            display: 'inline-block',
            width: '13px',
            height: '13px',
            marginRight: '5px'
          }
        })
      );           
    }

    let game_platforms = [];
    game.parent_platforms.forEach(platform => {
        let parent_platforms_arr = [];
        parent_platforms_arr.push(platform.platform.name);
        Object.keys(platforms).forEach(platform => {
            if (parent_platforms_arr.indexOf(platform) !== -1) {
                game_platforms.push(platforms[platform])
            }
        })
    })

    console.log(game)
    
    return (
        
        <div className={style.game__wrapper}>
           <div className={style.item}>
               <div className={style.item__media}>
                    <img src={game.background_image} alt='img' className={style.media__image}/>
               </div>
               <div className={style.item__info}>
                    <div className={style.flex__wrapper}>
                        <div className={style.item__info__meta}>
                            {game_platforms.map(showIconsSpeciality)}
                        </div>
                        <div className={style.item__info__metascore}>
                            {game.metacritic}
                        </div>
                    </div>
                    <div className={style.item__info__name}>
                        <NavLink to={{
                            pathname: `/games/${game.slug}`,
                            state: {
                                gamePage: game
                                }
                            }}>
                            {game.name}
                        </NavLink>
                    </div>
                    <div className={style.item__dropdown}>
                        <ul>
                            <li>
                                <div className={style.game__card__about__term}>Release Date:</div>
                                <div className={style.game__card__about__description}>{game.released}</div>
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