import React from 'react';
import style from './WishlistBtn.module.scss';

const WishlistBtn = () => {
    return (
        <div className={style.btn} role="button">
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