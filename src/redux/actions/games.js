import axios from "axios";
import { setGames } from "../gamesReducer";

export const getGames = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.rawg.io/api/games?key=5de003dc2c4248469ba11b8d1aee9e11&page=1&page_size=20`)
        dispatch(setGames(response.data))
    }
}