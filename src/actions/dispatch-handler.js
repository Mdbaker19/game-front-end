import {checkForDeath} from '../util/stateFunctions';
import {getDamage, missChance} from '../util/fightLogic';

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
            // TODO : WHAT A MESS......
            let [enemy, enemyDied] = checkForDeath(action.payload, state.player);
            let ran = ~~(Math.random() * 100);
            let missed = ran < missChance(enemy.speed, state.player.speed);
            let requiredExp = +state.player.playerLvl * 50;
            let endingExp = state.player.exp + enemy.expReward;
            let [newExp, didLevelUp] = endingExp >= requiredExp ? [endingExp - requiredExp, true] : [endingExp, false];
            // TODO: IF LEVEL UP, UPDATE PLAYER STATS
            let updatedPlayerInfo = enemyDied
                ? {...state.player, wallet: state.player.wallet + enemy.moneyReward, lvl: enemyDied ? state.player.lvl + 1 : state.player.lvl, exp: newExp, playerLvl: didLevelUp ? state.player.playerLvl + 1 : state.player.playerLvl}
                : {...state.player, health: state.player.health - (missed ? 0 : getDamage(enemy.attack, state.player.defense))};
            console.log(updatedPlayerInfo);
            return {...state, player: updatedPlayerInfo, enemy};
        case 'START_GAME':
            let playerStart = action.payload?.player;
            let enemyStart = action.payload?.enemy;
            return {...state, player: playerStart, enemy: enemyStart};
        default:
            return state;
    }
}
