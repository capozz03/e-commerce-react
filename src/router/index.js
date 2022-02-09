import GamePage from "../components/GamePage/GamePage";
import Main from "../components/Main/Main";

export const routes = [
    {path: '/games', element: <Main/>},
    {path: '/games/:gameSlug', element: <GamePage/>},
]