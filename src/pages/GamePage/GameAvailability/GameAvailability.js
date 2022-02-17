import React from 'react';
import { useNavigate } from 'react-router';
import style from './GameAvailability.module.scss';

export const GameAvailabilityItemArr = ({availability}) => {
    if (!availability[1].length) return null
    return (
        <div className={style.game__availability__flex__item}>
            <div className={style.game__availability__heading}>
                {availability[0]}
            </div>
            {availability[0] === 'platforms' 
                ?   
                <div className={style.game__availability__description}>
                    {availability[1].map(el => el.platform.name).join(', ')}
                </div>
                :   
                <div className={style.game__availability__description}>
                    {availability[1].map(el => el.name).join(', ')}
                </div>
            }
        </div>
    )
}

export const GameAvailabilityItemNotArr = ({availability}) => {
    if (!availability[1]) return null
    return (
        <div className={style.game__availability__flex__item}>
            <div className={style.game__availability__heading}>
                {availability[0]}
            </div>
            <div className={style.game__availability__description}>
                {availability[1]}
            </div>
        </div>
    )
}

const GameAvailability = (props) => {

    const gameAvailabilities = Object.entries(props);
    const navigate = useNavigate();

    let otherGames = gameAvailabilities.pop();

    const toOtherGame = () => {
        
    }

    return (
        <div className={style.game__availability}>
            <div className={style.game__availability__flex}>
                {gameAvailabilities.map(availability => {
                    if (Array.isArray(availability[1])) {
                        return (
                            <GameAvailabilityItemArr key={availability[0]} availability={availability}/>
                        )
                    } else {
                        return (
                            <GameAvailabilityItemNotArr key={availability[0]} availability={availability}/>
                        )
                    }
                })}
            </div>
            <div className={style.game__availability__otherGames}>
                {otherGames[1].length &&
                    <div className={style.game__availability__flex__item}>
                        <div className={style.game__availability__heading}>
                            Other games in the series
                        </div>
                        {otherGames[1].map(el => 
                            <div
                                key={el.id}
                                className={style.game__availability__description__otherGames}
                                onClick={() => navigate(`/games/${el.slug}`)}
                            >
                                {el.name}
                            </div>
                        )}  
                    </div>
                }
            </div>
        </div>
    );
}

export default GameAvailability;