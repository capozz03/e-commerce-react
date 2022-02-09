import { setGames, toggleIsFetching, setScreenshotsGame, setDetailsGame, setSameSeriesGame, fetchError } from "../gamesReducer";
import { gamesAPI } from "../../api/api";

export const getGames = (page, ordering) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        gamesAPI.getGames(page, ordering)
            .then(resp => {
                dispatch(setGames(resp.data));  
                dispatch(toggleIsFetching(false));              
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}


export const getDetailsGame = (gameSlug) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        gamesAPI.getDetailsGame(gameSlug)
            .then(resp => {
                dispatch(setDetailsGame(resp.data));  
                dispatch(toggleIsFetching(false));              
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}

export const getScreenshotsGame = (gameSlug) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        gamesAPI.getScreenshotsGame(gameSlug)
            .then(resp => {
                dispatch(setScreenshotsGame(resp.data));
                dispatch(toggleIsFetching(false));              
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}

export const getSameSeries = (gameSlug) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        gamesAPI.getSameSeries(gameSlug)
            .then(resp => {
                dispatch(setSameSeriesGame(resp.data));  
                dispatch(toggleIsFetching(false));              
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}
