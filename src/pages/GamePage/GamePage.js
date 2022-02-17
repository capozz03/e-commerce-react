import React, { useEffect, useContext } from 'react';
import style from './GamePage.module.scss';
import { useParams } from 'react-router';
import { useSelector  } from 'react-redux';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import GameAvailability from './GameAvailability/GameAvailability';
import { dateTransform } from '../../utils/dateTransform'
import WishlistBtn from '../../UI/WishlistBtn/WishlistBtn';
import { getDetailsGame, getScreenshotsGame, getSameSeries, getStoresGame} from '../../redux/actions/games';
import { useDispatch } from 'react-redux';
import { BackgroundContext } from '../../context';
import Preloader from '../../components/Preloader/Preloader';
import { iconsStoresTransform} from '../../utils/iconsTransform';
import StoreBtn from '../../UI/StoreBtn/StoreBtn';

export const GamePageHeader = ({released, playtime, name}) => { 
    return (
        <div className={style.game__head}>
                <div className={style.game__head__flex}>
                    <div className={style.game__head__meta}> 
                        <div className={style.game__head__meta__date}>
                            {dateTransform(released)}
                        </div>
                        <div className={style.game__head__meta__playtime}>
                            Average Playtime: {playtime} hours
                        </div>
                    </div>
                    <h1 className={style.game__head__title}>
                        {name}
                    </h1>
                </div>
            </div>
    )
}

export const GamePageAbout = ({description}) => { 
    return (
        <div className={style.game__about}>
            <h2 className={style.game__about__heading}>
                About
            </h2>
            <div 
                className={style.game__about__description} 
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}

export const GamePageRightMenu = ({gameDetails, gameStores}) => { 

    return (
        <div className={style.game__rightMenuBtns}>
            <div>
                <WishlistBtn 
                    gameDetails={gameDetails} 
                    gameId={gameDetails.id}/>
                {gameStores.length && 
                    <h2 className={style.game__rightMenuBtns__heading}>
                        Where to buy:
                    </h2>
                }       
                {gameStores.map((store, index) => 
                    <StoreBtn
                        key={store.store_id}
                        icons={iconsStoresTransform(store.store_id)}
                        storeUrl={store.url}
                    />
                )}
            </div>
        </div>
    )
}

const GamePage = () => {

    const {updateBgImage} = useContext(BackgroundContext)

    const {gameSlug} = useParams();
    const dispatch = useDispatch();
    
    const gameDetails = useSelector(state => state.gamesPage.gameDetails);
    const gameStores = useSelector(state => state.gamesPage.gameStores);
    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const screenshots = useSelector(state => state.gamesPage.screenshots);
    const gameSameSeries = useSelector(state => state.gamesPage.gameSameSeries);


    useEffect(() => {
        dispatch(getDetailsGame(gameSlug))
        dispatch(getScreenshotsGame(gameSlug))
        dispatch(getSameSeries(gameSlug))
        dispatch(getStoresGame(gameSlug))
    }, [gameSlug])

    useEffect(() => {
        updateBgImage(gameDetails.background_image)
    }, [gameDetails.background_image])


    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className={style.game}>
            <GamePageHeader 
                released={gameDetails.released}
                playtime={gameDetails.playtime}
                name={gameDetails.name}
            />
            <div className={style.game__flex__wrapper}>
                <Carousel screenshots={screenshots}>
                    {screenshots.map((item) => {
                        return (
                            <CarouselItem key={item.image} children={item.image}/>
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
                    otherGames={gameSameSeries}
                />              
            </div>
            <div className={style.game__flex__wrapper}>
                <GamePageAbout
                    description={gameDetails.description}
                />
                <GamePageRightMenu
                    gameDetails={gameDetails} 
                    gameStores={gameStores}
                />
            </div>
        </div>    
    );
};

export default GamePage;