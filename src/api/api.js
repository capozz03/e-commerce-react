import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/games?key=5de003dc2c4248469ba11b8d1aee9e11&',
});

export const gamesAPI = {
    getGames() {
        return instance.get(`page=1&page_size=100`)
            .then(response => response.data);
    }
}