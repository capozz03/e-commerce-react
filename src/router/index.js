import GamePage from "../pages/GamePage/GamePage";
import Main from "../pages/Main/Main";
import WishList from "../pages/WishList/WishList";

export const routes = [
    {path: '/games', element: <Main/>},
    {path: '/games/:gameSlug', element: <GamePage/>},
    {path: '/wishlist', element: <WishList/>},
]