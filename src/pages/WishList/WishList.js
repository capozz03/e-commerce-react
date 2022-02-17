import React, {useEffect, useState} from 'react';
import GameList from '../../components/GameList/GameList';
import style from './WishList.module.scss';
import { checkLocalStorageKeys } from '../../utils/checkLocalStorageKeys';

const WishList = () => {

    const [wishListGames, setWishListGames] = useState([]);

    useEffect(() => {
        setWishListGames(checkLocalStorageKeys());
    }, [])


    return (
        <div className={style.container}>
            {!wishListGames.length
            ? 
                <h1 className={style.heading__emptyList}>No games in wishlist</h1>
            :   
                <>
                    <h1 className={style.heading}>Wishlist</h1>
                    <div className={style.flex_wrapper}>
                            {wishListGames.map((game, index) => 
                                <GameList
                                    key={index} 
                                    game={game}
                                />
                            )}
                    </div>
                </>
            }
        </div>
    );
};

export default WishList;