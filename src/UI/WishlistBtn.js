import React, { useState, useContext} from 'react';
import style from './WishlistBtn.module.scss';
import { BackgroundContext } from '../context';

const WishlistBtn = () => {

    const [state, setState] = useState(0)

    const {updateWishlistCount} = useContext(BackgroundContext)

    const clicked = () => {
        setState(state + 1)
        updateWishlistCount(state)
    }


    return (
        <div className={style.btn} onClick={clicked}>
            <div className={style.btn__wishlist}>
                <div className={style.btn__wishlist__text}>
                    <div className={style.btn__wishlist__subtitle}>
                        Add to
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