import React, { useEffect, useState, useContext } from 'react';
import style from './Header.module.scss';
import { FaHeart, FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchGames } from '../../redux/actions/games';
import Preloader from '../Preloader/Preloader';
import { BackgroundContext } from '../../context';
import { useSkipFirstRender } from '../../hooks/useSkipFirstRender';
import { useDebounce } from '../../hooks/useDebounce';

const Header = () => {

    const {wishlistCount} = useContext(BackgroundContext);

    const isSearching = useSelector(state => state.gamesPage.isSearching);
    const searchGames = useSelector(state => state.gamesPage.searchGames);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);

    const skipFirstRender = useSkipFirstRender();

    useDebounce(async () => {
        if (query) {
            dispatch(getSearchGames(page, query))
        }
        setSearchResults([]);
    }, 500, query)

    useEffect(() => {
        if (skipFirstRender) {
            setSearchResults(searchGames);
        }
    }, [skipFirstRender, searchGames]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/games/${searchResults[0].slug}`)
        clearState()
    }

    const clearState = () => {
        setSearchResults([])
        setQuery("")
    };

    const toWishlist = () => {
        navigate(`/wishlist`)
    }

    return (
        <header>
            <div className={style.flex_wrapper}>
                <Link className={style.navLink} to="/">
                    <div className={style.logo}>
                        PAWG
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={handleChange}
                        value={query}
                    />
                    {query &&
                        <div className={style.dropdown__container}>
                            <div className={style.dropdown__content}>
                                {isSearching ? <Preloader/> :
                                    <>
                                        {searchResults.map(item => (
                                            <div 
                                                key={item.id}
                                                className={style.dropdown__item}
                                                onClick={() => {
                                                    navigate(`/games/${item.slug}`)
                                                    clearState()
                                                }}
                                                >
                                                {item.name}
                                            </div>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                    }
                    <button type="submit"> <FaSearch /> </button>
                </form>
                <div className={style.wishList}> 
                    {!wishlistCount 
                        ?
                            <h2 className={style.wishList__empty}
                                onClick={toWishlist}
                            >
                            <FaHeart size={24}/>
                            </h2> 
                        :
                            <h2 className={style.wishList__notEmpty}
                                onClick={toWishlist}
                            >
                            <FaHeart size={24}/>
                                <span>{wishlistCount}</span>
                            </h2> 
                    }
                    
                </div>
            </div>
        </header>
    );
};

export default Header;