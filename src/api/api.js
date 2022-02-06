import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
});

export const gamesAPI = {
    getGames() {
        return instance.get(`games?key=5de003dc2c4248469ba11b8d1aee9e11&page=1&page_size=40`)
            .then(response => response.data);
    },
    getScreenshotsGame(gameSlug) {
        return instance.get(`games/${gameSlug}/screenshots?key=5de003dc2c4248469ba11b8d1aee9e11`)
            .then(response => response.data);
    },
    getDetailsGame(gameSlug) {
        return instance.get(`games/${gameSlug}?key=5de003dc2c4248469ba11b8d1aee9e11`)
            .then(response => response.data);
    },
    getSameSeries(gameSlug) {
        return instance.get(`games/${gameSlug}/game-series?key=5de003dc2c4248469ba11b8d1aee9e11`)
            .then(response => response.data);
    }
}
