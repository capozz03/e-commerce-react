import React from 'react';
import { Routes, Route , Navigate} from 'react-router';
import { routes } from '../../router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            )}
            <Route path='*' element={<Navigate to='/games' />}/> 
        </Routes>
    );
};

export default AppRouter;