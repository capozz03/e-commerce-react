import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Main.module.scss';
import GameList from '../../components/GameList/GameList';
import { getFilterGames, getGames } from '../../redux/actions/games';
import Preloader from '../../components/Preloader/Preloader';
import { useObserver } from '../../hooks/useObserver';
import SelectBtn from '../../UI/SelectBtn/SelectBtn';
import { getPageCount } from '../../utils/getPageCount';


const Main = () => {

    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.gamesPage.isFetching);
    const isFiltering = useSelector(state => state.gamesPage.isFiltering);
    const games = useSelector(state => state.gamesPage.games);
    const error = useSelector(state => state.gamesPage.error);
    const totalCount = useSelector(state => state.gamesPage.totalCount);

    const observer = useRef();

    const [page, setPage] = useState(1);
    const totalPages = getPageCount(totalCount, 20);

    const [filter, setFilter] = useState('')
 
    useObserver(observer, page < totalPages, isFetching, () => {
        setPage(page + 1);
        dispatch(getGames(page, filter))
    })

    useEffect(() => {
        dispatch(getFilterGames(page, filter))
    }, [filter])


    const onChangeFilter = (selectedSort) => {
        setFilter(selectedSort)
    }

    const options = [
        {value: '-relevance', name: 'Relevance'},
        {value: '-released', name: 'Release date'},
        {value: 'rating', name: 'Average Rating'},
    ]

    return (
        <div className={style.container}>
            {error &&
                <h1>Произошла ошибка {error}</h1>
            }
            <SelectBtn
                value={filter}
                onChange={onChangeFilter}
                defaultValue="Ordering by:"
                options={options}
            />
            {isFiltering 
                ?
                    <Preloader className={style.preloader__block}/>
                :
                    <div className={style.flex_wrapper}>
                        {games.map((game, index) => 
                            <GameList
                                key={index} 
                                game={game}
                            />
                        )}
                    </div>
                }
            <div ref={observer} style={{height: 20}}/>  
        </div>
    );
};

export default Main;