import style from './GamePageAbout.module.scss';

export const GamePageAbout = ({description}) => { 
    return (
        <div className={style.game__about}>
            <h2 className={style.game__about__heading}>
                About
            </h2>
            <div 
                className={style.game__about__description} 
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}

export default GamePageAbout