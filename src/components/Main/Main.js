import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Main.module.scss';
import GameList from './GameList/GameList';
import { getGames } from '../../redux/actions/games';
import Preloader from '../Preloader/Preloader';
import Shimmer from '../Preloader/Shimmer';
import { useObserver } from '../../hooks/useObserver';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/getPageCount';
import SelectBtn from '../../UI/SelectBtn/SelectBtn';

const Main = () => {

    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const games = useSelector(state => state.gamesPage.games);
    const gamesCount = useSelector(state => state.gamesPage.gamesCount);

    const error = useSelector(state => state.gamesPage.error);
    const totalCount = useSelector(state => state.gamesPage.totalCount);
    const observer = useRef();

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(totalCount / 20);
    const [limit, setLimit] = useState(20);

    const [filter, setFilter] = useState('')

    const [posts, setPosts] = useState([])

    console.log(filter)

    useEffect(() => {
        console.log("Сработал useEffect")
        dispatch(getGames(page, filter))
        setPosts(games)
    }, [filter])
 
    useObserver(observer, page < totalPages, isFetching, () => {
        console.log("Сработал useObserver")
        setPage(page => page + 1);
        dispatch(getGames(page, filter))
        setPosts([...posts, ...games])
    })

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className={style.container}>
            {error &&
                <h1>Произошла ошибка {error}</h1>
            }
            <SelectBtn
                value={filter.sort}
                onChange={selectedSort => setFilter(selectedSort)}
                defaultValue="Ordering by:"
                options={[
                    {value: 'relevance', name: 'Relevance'},
                    {value: 'released', name: 'Release date'},
                    {value: 'rating', name: 'Average Rating'}
                ]}
            />
            <div className={style.flex_wrapper}>
                {posts.map(game => 
                    <GameList
                        key={game.id} 
                        game={game}
                    />
                )}
            </div>

        <div ref={observer} style={{height: 20, background: 'red'}}/>  
        </div>
    );
};

export default Main;