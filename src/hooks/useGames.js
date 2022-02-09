import { useMemo } from "react"

export const useSortedGames = (games, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("Отработала функция сортировки")
        if (sort) {
          return [...games].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return games
    }, [sort, games])

    return sortedPosts;
}

export const useGames = (games, sort, query) => {
    const sortedGames = useSortedGames(games, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedGames.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedGames])

    return sortedAndSearchedPosts;
}