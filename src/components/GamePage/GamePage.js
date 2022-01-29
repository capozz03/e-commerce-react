import React from 'react';
import style from './GamePage.module.scss';
import { useParams, useLocation } from 'react-router';

const GamePage = (props) => {
    const name = props.name;
    let location = useLocation();
    const { gameSlug } = useParams();
    return (
        <div className={style.container}>
            {gameSlug}
        </div>
        
    );
};

export default GamePage;