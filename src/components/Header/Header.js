import React, { useEffect, useState } from 'react';
import style from './Header.module.scss';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = (props) => {
    
    const data = props.games.map(item => item.name);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    console.log(searchTerm)
    useEffect(() => {
        const results = data.filter(game =>
            game.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <header>
            <div className={style.flex_wrapper}>
                <Link className={style.navLink} to="/"><div className={style.logo}>PAWG</div></Link>
                {/* {searchTerm === null ? null :
                <ul>
                {searchResults.map(item => (
                <li>{item}</li>
                ))}
            </ul>} */}
                
                <form>
                    <input 
                    type="text" 
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchTerm}/>
                    <button type="submit"> <FaSearch /> </button>
                </form>
                <button type="submit" className={style.wishList}> <FaRegHeart /> </button>
            </div>
            
        </header>
    );
};

export default Header;