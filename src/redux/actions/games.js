import { setGames, toggleIsFetching } from "../gamesReducer";
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

