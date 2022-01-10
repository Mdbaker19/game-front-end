import {checkForDeath} from '../util/stateFunctions';

export const dispatchHandler = (state, action) => {
    console.log("ACTION: ", action);
    switch (action.type) {
        case 'USE_ITEM':
            let updatedPlayerItems = [];
            for(let i = 0; i < state.player.inventory.length; i++) {
                if(i === action.payload.index) continue;
                updatedPlayerItems.push(state.player.inventory[i]);
            }
            let updatedPlayer = {...state.player, inventory: updatedPlayerItems};
            return {...state, player: updatedPlayer};
        case 'DAMAGE':
            let enemy = checkForDeath(action.payload, state.player);
            let updatedPlayerH = {...state.player, health: state.player.health - 1};
            return {...state, player: updatedPlayerH, enemy};
        case 'START_GAME':
            let playerStart = action.payload?.player;
            let enemyStart = action.payload?.enemy;
            return {...state, player: playerStart, enemy: enemyStart};
        default:
            return state;
    }
}
