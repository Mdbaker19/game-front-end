import {useReducer} from 'react';
import GameContext from './game-context';
import {dispatchHandler} from '../actions/dispatch-handler';

let defaultGameState = {
    player: {},
    enemy: {}
}


const GameProvider = props => {
    const [gameState, dispatchGameAction] = useReducer(dispatchHandler, defaultGameState);

    const updateEnemyHandler = (enemy) => {
        dispatchGameAction({type: 'DAMAGE', payload: enemy});
    }
    
    const updateItemHandler = (item, status) => {
        dispatchGameAction({type: 'USE_ITEM', payload: {item, status}});
    }
    
    const startGameHandler = (gameData) => {
        dispatchGameAction({type: 'START_GAME', payload: gameData});
    }
    
    const gameContext = {
        player: gameState.player,
        enemy: gameState.enemy,
        updateEnemy: updateEnemyHandler,
        updateItem: updateItemHandler,
        startGame: startGameHandler
    }
    
    return <GameContext.Provider value={[gameState, gameContext]}>
        {props.children}
    </GameContext.Provider>
    
}

export default GameProvider;