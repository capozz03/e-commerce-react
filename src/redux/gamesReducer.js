const SET_GAMES = 'SET_GAMES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FILTERING = 'TOGGLE_IS_FILTERING';
const TOGGLE_IS_SEARCHING = 'TOGGLE_IS_SEARCHING';
const SET_SCREENSHOTS_GAME = 'SET_SCREENSHOTS_GAME';
const SET_DETAILS_GAME = 'SET_DETAILS_GAME';
const SET_SAME_SERIES_GAME = 'SET_SAME_SERIES_GAME';
const SET_ERROR = 'SET_ERROR';
const SET_FILTER_GAMES = 'SET_FILTER_GAMES';
const SET_SEARCH_GAMES = 'SET_SEARCH_GAMES';
const SET_STORES_GAME = 'SET_STORES_GAME';

let initialState = {
    isFetching: false,
    isFiltering: false,
    isSearching: false,
    totalCount: 100,
    games: [],
    searchGames: [],
    screenshots: [],
    gameDetails: [],
    gameStores: [],
    gameSameSeries: [],
    error: ''
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES: {
            return { 
                ...state,
                games: [...state.games, ...action.payload.results],
                totalCount: action.payload.count
            }
        }
        case SET_FILTER_GAMES: {
            return { 
                ...state,
                games: action.payload.results,
            }
        }
        case SET_SEARCH_GAMES: {
            return { 
                ...state,
                searchGames: action.payload.results,
            }
        }
        case SET_SCREENSHOTS_GAME: {
            return { 
                ...state, 
                screenshots: action.payload.results
            }
        }
        case SET_DETAILS_GAME: {
            return { 
                ...state, 
                gameDetails: action.gameDetails,
            }
        }
        case SET_STORES_GAME: {
            return { 
                ...state, 
                gameStores: action.payload.results,
            }
        }
        case SET_SAME_SERIES_GAME: {
            return { 
                ...state, 
                gameSameSeries: action.payload.results,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return { 
                ...state, 
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FILTERING: {
            return { 
                ...state, 
                isFiltering: action.isFiltering
            }
        }
        case TOGGLE_IS_SEARCHING: {
            return { 
                ...state, 
                isSearching: action.isSearching
            }
        }
        case SET_ERROR: {
            return { 
                ...state, 
                error: action.error
            }
        }
        default:
            return state;
    }
}

export const setGames = (games) => ({ type: SET_GAMES, payload: games })
export const setScreenshotsGame = (screenshots) => ({ type: SET_SCREENSHOTS_GAME, payload: screenshots })
export const setDetailsGame = (gameDetails) => ({ type: SET_DETAILS_GAME, gameDetails })
export const setSameSeriesGame = (gameSameSeries) => ({ type: SET_SAME_SERIES_GAME, payload: gameSameSeries })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFiltering = (isFiltering) => ({ type: TOGGLE_IS_FILTERING, isFiltering}) 
export const toggleIsSearching = (isSearching) => ({ type: TOGGLE_IS_SEARCHING, isSearching}) 
export const fetchError = (error) => ({ type: SET_ERROR, error})

export const setFilterGames = (games) => ({ type: SET_FILTER_GAMES, payload: games })
export const setSearchGames = (searchGames) => ({ type: SET_SEARCH_GAMES, payload: searchGames })
export const setStoresGame = (storesGame) => ({ type: SET_STORES_GAME, payload: storesGame })


export default gameReducer;
