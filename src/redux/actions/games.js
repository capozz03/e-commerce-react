import { setGames, toggleIsFetching, setScreenshotsGame, setDetailsGame, setSameSeriesGame } from "../gamesReducer";
import { gamesAPI } from "../../api/api";

export const getGames = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        gamesAPI.getGames().then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setGames(data));
        });
    }
}

export const getScreenshotsGame = (gameSlug) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        gamesAPI.getScreenshotsGame(gameSlug).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setScreenshotsGame(data));
        });
    }
}

export const getDetailsGame = (gameSlug) => {
    return async (dispatch) => {
        gamesAPI.getDetailsGame(gameSlug).then(data => {
            dispatch(setDetailsGame(data));
        });
    }
}

export const getSameSeries = (gameSlug) => {
    return async (dispatch) => {
        gamesAPI.getSameSeries(gameSlug).then(data => {
            dispatch(setSameSeriesGame(data));
        });
    }
}

