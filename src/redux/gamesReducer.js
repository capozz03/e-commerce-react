
const SET_GAMES = 'SET_GAMES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    isFetching: true,
    results: [],
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES: {
            return { 
                ...state, 
                results: action.payload.results 
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
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})


export default gameReducer;