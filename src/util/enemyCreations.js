import {getRandomType} from './stateFunctions';

export const getEnemy = playerLvl => {
    let [type, img] = getRandomType();
    
    // a multiplied effect on enemy
    let enemyRandomizer = ~~(Math.random() * 5);
    switch (enemyRandomizer) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }
    let enemy = {
        health: playerLvl * 10,
        type,
        img,
        level: playerLvl,
        attack: 1,
        defense: 1,
        speed: 1
    };
    return enemy;
}