import * as gameConst from './constants';
export const getRandomType = () => {
    return gameConst.enemyTypes[~~(Math.random() * gameConst.enemyTypes.length)];
}

export const calcDamage = (player, enemy) => {
    let pLvl = player.playerLvl;
    return ~~(Math.random() * (pLvl / player.lvl));
}