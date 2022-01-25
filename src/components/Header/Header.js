import React from 'react';
import style from './Header.module.scss';
import { FaRegHeart, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className={style.flex_wrapper}>
                <div className={style.logo}>PAWG</div>
                <form>
                    <input type="text" placeholder="Искать здесь..."/>
                    <button type="submit"> <FaSearch /> </button>
                </form>
                <button type="submit" className={style.wishList}> <FaRegHeart /> </button>
            </div>
            
        </header>
    );
};

export default Header;