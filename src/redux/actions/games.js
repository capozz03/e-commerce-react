import { setGames, 
    toggleIsFetching, 
    toggleIsFiltering, 
    setScreenshotsGame, 
    setDetailsGame, 
    setSameSeriesGame, 
    fetchError, 
    setFilterGames,
    setSearchGames,
    toggleIsSearching
} from "../gamesReducer";
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

export const getFilterGames = (page, ordering) => {
    return async (dispatch) => {

        dispatch(toggleIsFiltering(true));
        gamesAPI.getGames(page, ordering)
            .then(resp => {
                dispatch(setFilterGames(resp.data));  
                dispatch(toggleIsFiltering(false));              
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}

export const getSearchGames = (page, ordering) => {
    return async (dispatch) => {

        dispatch(toggleIsSearching(true));
        gamesAPI.getSearchGames(page, ordering)
            .then(resp => {
                dispatch(setSearchGames(resp.data));  
                dispatch(toggleIsSearching(false));              
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
