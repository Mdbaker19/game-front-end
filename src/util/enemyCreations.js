import {getRandomType} from './stateFunctions';

export const getEnemy = (playerLvl, enemyRandomizer) => {
    let [type, img] = getRandomType();
    let base = 1.0;
    switch (enemyRandomizer) {
        case 0:
            base *= .5;
            break;
        case 1:
            base *= .7;
            break;
        case 2:
            base *= .9;
            break;
        case 3:
            base *= 1.0;
            break;
        case 4:
            base *= 1.2;
            break;
    }
    // TODO: this will take a lot of editing im sure
    let stat = (playerLvl * base) + 1;
    let enemy = {
        health: playerLvl * 10,
        type,
        img,
        level: playerLvl,
        attack: stat,
        defense: stat,
        speed: stat,
        expReward: playerLvl * 10,
        moneyReward: playerLvl * 10
    }
    console.log(enemy);
    return enemy;
}