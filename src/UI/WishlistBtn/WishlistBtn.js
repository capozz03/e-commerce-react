import React, { useState, useContext} from 'react';
import style from './WishlistBtn.module.scss';
import { BackgroundContext } from '../../context';
import { checkLocalStorageKeys } from '../../utils/checkLocalStorageKeys';

const WishlistBtn = ({gameId, gameDetails}) => {

    const {setWishlistCount} = useContext(BackgroundContext);

    const isClicked = localStorage.getItem(gameId);

    const clicked = () => {
        if (localStorage.getItem(gameId)) {
            localStorage.removeItem(gameId)
        } else {
            localStorage.setItem(gameId, JSON.stringify(gameDetails))
        }
        let wishlistCount = checkLocalStorageKeys().length
        return setWishlistCount(wishlistCount)
        
    }


    return (
        <div className={style.btn} onClick={clicked}>
            <div className={isClicked ? style.btn__wishlist__clicked : style.btn__wishlist}>
                <div className={style.btn__wishlist__text}>
                    <div className={style.btn__wishlist__subtitle}>
                        {isClicked ? 'Added to' : 'Add to'}
                    </div>
                    <div className={style.btn__wishlist__title}>
                        Wishlist
                    </div>
                </div>
                <div className={style.btn__wishlist__container__icon}>
                    <div className={style.btn__wishlist__icon}></div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBtn;