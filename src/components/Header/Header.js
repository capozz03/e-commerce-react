import React, { useEffect, useState } from 'react';
import style from './Header.module.scss';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useGames } from '../../hooks/useGames';

const Header = () => {

    const games = useSelector(state => state.gamesPage.games);

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };


    useEffect(() => {
        const results = games.filter(game =>
            game.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <header>
            <div className={style.flex_wrapper}>
                <Link className={style.navLink} to="/"><div className={style.logo}>PAWG</div></Link>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                    {!searchTerm ? null :
                        <div className={style.dropdown__container}>
                            <div className={style.dropdown__content}>
                                {searchResults.map(item => (
                                    <div 
                                        className={style.dropdown__item}
                                        onClick={() => {
                                            navigate(`/games/${item.slug}`)
                                            setSearchResults([])
                                            setSearchTerm("")
                                        }}
                                        >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    <button type="submit"> <FaSearch /> </button>
                </form>
                <button type="submit" className={style.wishList}> <FaRegHeart /> </button>
            </div>
            
        </header>
    );
};

export default Header;