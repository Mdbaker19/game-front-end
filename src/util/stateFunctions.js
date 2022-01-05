import * as gameConst from './constants';
export const getRandomType = () => {
    return gameConst.enemyTypes[~~(Math.random() * gameConst.enemyTypes.length)];
}