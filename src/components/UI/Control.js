import classes from './Control.module.css';
import {useContext} from 'react';
import GameContext from '../../store/game-context';

const Control = props => {

    console.log("control rerender")
    const [state, gameCtx] = useContext(GameContext);

    const updateEnemy = enemy => {
        console.log(state);
        console.log(gameCtx);
        enemy.health -= 1;
        let updated = {health: +enemy.health - 1, ...enemy}
        console.log(updated);
        gameCtx.updateEnemy(updated);
    }

    return (
        <button className={classes.controls} onClick={updateEnemy.bind(this, props.enemy)}>{props.text}</button>
    )

}

export default Control;