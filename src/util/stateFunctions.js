import * as gameConst from './constants';

export const getRandomType = () => {
    let idx = ~~(Math.random() * gameConst.enemyTypes.length);
    return [gameConst.enemyTypes[idx], gameConst.enemyImgs[idx]];
}

export const checkForDeath = (enemy, player) => {
    return enemy.health <= 0 ? [getNextEnemy(enemy, player), true] : [enemy, false];
}



function getNextEnemy(enemy, player) {
    let [type, img] = getRandomType();
    return {
        health: player.lvl * 10,
        type,
        img,
        level: enemy.level + 1,
        attack: 1,
        defense: 1,
        speed: 1,
        expReward: 10,
        moneyReward: 10
    }
}