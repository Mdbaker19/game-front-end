import * as gameConst from './constants';
export const getRandomType = () => {
    return gameConst.enemyTypes[~~(Math.random() * gameConst.enemyTypes.length)];
}

export const calcDamage = (player, enemy) => {
    let pLvl = player.playerLvl;
    return ~~(Math.random() * (pLvl / player.lvl));
}

export const checkForDeath = (enemy, player) => {
    return enemy.health <= 0 ? getNextEnemy(enemy, player) : enemy;
}



function getNextEnemy(enemy, player) {
    return {
        health: player.lvl * 10,
        type: getRandomType(),
        level: enemy.level + 1
    }
}