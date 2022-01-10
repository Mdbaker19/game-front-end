import classes from './Control.module.css';
import {useContext} from 'react';
import GameContext from '../../store/game-context';
import {getDamage, missChance} from '../../util/fightLogic';
import {postPlayerData} from '../../actions/Game-fetch-post';

const Control = props => {

    const [state, gameCtx] = useContext(GameContext);
    const saveGameHandler = async () => await postPlayerData(state.player);

    const updateEnemy = enemy => {
        let ran = ~~(Math.random() * 100);
        let missed = ran < missChance(state.player.speed, enemy.speed);
        let playerDamage = missed ? 0 : getDamage(state.player.attack, enemy.defense);
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