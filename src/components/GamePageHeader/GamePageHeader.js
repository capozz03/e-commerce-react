import style from './GamePageHeader.module.scss';
import { dateTransform } from '../../utils/dateTransform';

const GamePageHeader = ({released, playtime, name}) => { 
    return (
        <div className={style.game__head}>
                <div className={style.game__head__flex}>
                    <div className={style.game__head__meta}> 
                        <div className={style.game__head__meta__date}>
                            {dateTransform(released)}
                        </div>
                        <div className={style.game__head__meta__playtime}>
                            Average Playtime: {playtime} hours
                        </div>
                    </div>
                    <h1 className={style.game__head__title}>
                        {name}
                    </h1>
                </div>
            </div>
    )
}

export default GamePageHeader