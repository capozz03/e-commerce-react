import React, { useEffect, useContext } from 'react';
import style from './GamePage.module.scss';
import { useParams } from 'react-router';
import { useSelector  } from 'react-redux';
import Carousel, { CarouselItem } from '../Carousel/Carousel';
import GameAvailability from './GameAvailability/GameAvailability';
import { dateTransform } from './../../utils/dateTransform'
import WishlistBtn from '../../UI/WishlistBtn';
import { getDetailsGame, getScreenshotsGame, getSameSeries} from '../../redux/actions/games';
import { useDispatch } from 'react-redux';
import { BackgroundContext } from '../../context';
import Preloader from '../Preloader/Preloader';

const GamePage = () => {

    const {updateBgImage} = useContext(BackgroundContext)

    const {gameSlug} = useParams();
    const dispatch = useDispatch();
    const gameDetails = useSelector(state => state.gamesPage.gameDetails);
    const isFetching = useSelector(state => state.gamesPage.isFetching);


    useEffect(() => {
        dispatch(getDetailsGame(gameSlug))
        dispatch(getScreenshotsGame(gameSlug))
        dispatch(getSameSeries(gameSlug))
    }, [gameSlug])

    useEffect(() => {
        updateBgImage(gameDetails.background_image)
    }, [gameDetails.background_image])
    

    const screenshots = useSelector(state => state.gamesPage.screenshots);

    const gameSameSeries = useSelector(state => state.gamesPage.gameSameSeries);

    console.log(isFetching)

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className={style.game}>
            <div className={style.game__head}>
                <div className={style.game__head__flex}>
                    <div className={style.game__head__meta}> 
                        <div className={style.game__head__meta__date}>
                            {dateTransform(gameDetails.released)}
                        </div>
                        <div className={style.game__head__meta__playtime}>
                            Average Playtime: {gameDetails.playtime} hours
                        </div>
                    </div>
                    <h1 className={style.game__head__title}>
                        {gameDetails.name}
                    </h1>
                </div>
            </div>
            <div className={style.game__flex__wrapper}>
                <Carousel screenshots={screenshots}>
                    {screenshots.map((item) => {
                        return (
                            <CarouselItem children={item.image}/>
                        )
                    })}
                </Carousel>
                <GameAvailability 
                    platforms={gameDetails.platforms}
                    genres={gameDetails.genres}
                    released={dateTransform(gameDetails.released)}
                    metacritic={gameDetails.metacritic}
                    developers={gameDetails.developers}
                    publishers={gameDetails.publishers}
                    other_games_in_the_series={gameSameSeries}
                />
                
            </div>
            
            <div className={style.game__flex__wrapper}>
                <div className={style.game__about}>
                    <h2 className={style.game__about__heading}>
                        About
                    </h2>
                    <div 
                        className={style.game__about__description} 
                        dangerouslySetInnerHTML={{ __html: gameDetails.description }}
                    />
                </div>
                <WishlistBtn/>
            </div>
        </div>    
    );
};

export default GamePage;