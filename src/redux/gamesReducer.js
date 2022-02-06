
const SET_GAMES = 'SET_GAMES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_SCREENSHOTS_GAME = 'SET_SCREENSHOTS_GAME';
const SET_BACKGROUND_IMAGE = 'SET_BACKGROUND_IMAGE';
const SET_DETAILS_GAME = 'SET_DETAILS_GAME';
const SET_SAME_SERIES_GAME = 'SET_SAME_SERIES_GAME';

let initialState = {
    isFetching: true,
    games: [],
    screenshots: [],
    background: null,
    gameDetails: [],
    gameSameSeries: [1]
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES: {
            return { 
                ...state, 
                games: action.payload.results
            }
        }
        case SET_SCREENSHOTS_GAME: {
            return { 
                ...state, 
                screenshots: action.payload.results
            }
        }
        case SET_BACKGROUND_IMAGE: {
            return { 
                ...state, 
                background: action.background
            }
        }
        case SET_DETAILS_GAME: {
            return { 
                ...state, 
                gameDetails: action.gameDetails,
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
        default:
            return state;
    }
}

export const setGames = (games) => ({ type: SET_GAMES, payload: games })
export const setScreenshotsGame = (screenshots) => ({ type: SET_SCREENSHOTS_GAME, payload: screenshots })
export const setDetailsGame = (gameDetails) => ({ type: SET_DETAILS_GAME, gameDetails })
export const setSameSeriesGame = (gameSameSeries) => ({ type: SET_SAME_SERIES_GAME, payload: gameSameSeries })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const backgroundImage = (background) => ({ type: SET_BACKGROUND_IMAGE, background})


export default gameReducer;