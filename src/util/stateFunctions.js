import * as gameConst from './constants';
import {getEnemy} from './enemyCreations';

export const getRandomType = () => {
    let idx = ~~(Math.random() * gameConst.enemyTypes.length);
    return [gameConst.enemyTypes[idx], gameConst.enemyImgs[idx]];
}

export const checkForDeath = (enemy, player) => {
    return enemy.health <= 0 ? [getEnemy(player.lvl, ~~(Math.random() * 5)), true] : [enemy, false];
}
