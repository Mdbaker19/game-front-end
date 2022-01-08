import Card from './UI/Card';
import {useContext} from 'react';
import GameContext from '../store/game-context';

const Enemy = props => {
    const [state, gameCtx] = useContext(GameContext);

    return (
        <Card>
            <h1>{state.enemy.type}</h1>
            <h3>Lvl: {state.enemy.level}</h3>
            <h3>HP: {state.enemy.health}</h3>
        </Card>
    )
}

export default Enemy;