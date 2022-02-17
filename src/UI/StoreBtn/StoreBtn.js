import React from 'react';
import { showIconsSpeciality } from '../../utils/showsIconsSpeciality';
import style from './StoreBtn.module.scss';

const StoreBtn = ({icons, storeUrl}) => {
    const iconName = icons.map(icon => icon.name);
    const iconSvg = icons.map(icon => showIconsSpeciality(icon.icon))

    return (
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">
            <div className={style.storeBtn}>
                <div className={style.storeBtn__name}>
                    {iconName}
                </div>
                <span className={style.storeBtn__icon}>
                    {iconSvg}
                </span>
            </div>
        </a>
    );
};

export default StoreBtn;