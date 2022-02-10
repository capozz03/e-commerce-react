import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
});

export const gamesAPI = {
    async getGames(page = 1, ordering = 'relevance') {
        const response = await instance.get(`games?key=5de003dc2c4248469ba11b8d1aee9e11&page=${page}&page_size=20&ordering=${ordering}`)
        return response
    },
    async getScreenshotsGame(gameSlug) {
        const response = await instance.get(`games/${gameSlug}/screenshots?key=5de003dc2c4248469ba11b8d1aee9e11`)
        return response
    },
    async getDetailsGame(gameSlug) {
        const response = await instance.get(`games/${gameSlug}?key=5de003dc2c4248469ba11b8d1aee9e11`)
        return response
    },
    async getSameSeries(gameSlug) {
        const response = await instance.get(`games/${gameSlug}/game-series?key=5de003dc2c4248469ba11b8d1aee9e11`)
        return response
    },
    async getSearchGames(page = 1, search) {
        const response = await instance.get(`games?key=5de003dc2c4248469ba11b8d1aee9e11&page=${page}&page_size=20&search=${search}`)
        return response
    }
}
