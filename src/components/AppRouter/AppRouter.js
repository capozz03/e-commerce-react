import React from 'react';
import { Routes, Route , Navigate} from 'react-router';
import { routes } from '../../router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route
                    path={route.path}
                    element={route.element}
                />
            )}
            <Route path='*' element={<Navigate to='/games' />}/> 
            {/* <Route exact path="/" element={ <Main games={games}/> } />
            <Route path="/games/:gameSlug" element={ <GamePage updateGameDetails={updateGameDetails}/> }/>
            */}
        </Routes>
    );
};

export default AppRouter;