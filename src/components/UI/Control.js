import classes from './Control.module.css';
import {useContext} from 'react';
import GameContext from '../../store/game-context';
import {calcDamage} from '../../util/stateFunctions';
import {postPlayerData} from '../../actions/Game-fetch-post';

const Control = props => {

    const [state, gameCtx] = useContext(GameContext);
    const saveGameHandler = async () => await postPlayerData(state.player);

    const updateEnemy = enemy => {
        let playerDamage = calcDamage(state.player, enemy);
        enemy.health -= playerDamage;
        let updated = {health: +enemy.health, ...enemy}
        gameCtx.updateEnemy(updated);
    }

    return (
        <div>
            <button className={classes.controls} onClick={updateEnemy.bind(this, state.enemy)}>{props.text}</button>
            <button onClick={saveGameHandler}>Save game</button>
        </div>
    )

}

export default Control;