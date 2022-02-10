import React from 'react';
import style from './Preloader.module.scss';

const Shimmer = () => {
    return (
        <div className={style.preloader__container}>
            <div className={style.ldsDualRing}></div>
        </div>
        
        
    );
};

export default Shimmer;