const SET_GAMES = 'SET_GAMES';

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
        default:
            return state;
    }
}

export const setGames = (games) => ({ type: SET_GAMES, payload: games })


export default gameReducer;