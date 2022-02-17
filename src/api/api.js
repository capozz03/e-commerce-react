import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
});

export const gamesAPI = {
    async getGames(page = 1, ordering = 'relevance') {
        const response = await instance.get(`games?key=385fe51a8fac40539d081041a7bb2970&page=${page}&page_size=20&ordering=${ordering}`)
        return response
    },
    async getScreenshotsGame(gameSlug) {
        const response = await instance.get(`games/${gameSlug}/screenshots?key=385fe51a8fac40539d081041a7bb2970`)
        return response
    },
    async getDetailsGame(gameSlug) {
        const response = await instance.get(`games/${gameSlug}?key=385fe51a8fac40539d081041a7bb2970`)
        return response
    },
    async getSameSeries(gameSlug) {
        const response = await instance.get(`games/${gameSlug}/game-series?key=385fe51a8fac40539d081041a7bb2970`)
        return response
    },
    async getSearchGames(page, search) {
        const response = await instance.get(`games?key=385fe51a8fac40539d081041a7bb2970&page=${page}&page_size=15&search=${search}`)
        return response
    },
    async getStoresGame(gameSlug) {
        const response = await instance.get(`games/${gameSlug}/stores?key=385fe51a8fac40539d081041a7bb2970`)
        return response
    }
}
