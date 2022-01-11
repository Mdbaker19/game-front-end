import {getEnemy} from '../util/enemyCreations';

describe('enemy creation', () => {
   test('enemy stats are correct based off multiplier passed in and player level', () => {
       let multiplier = 3;
       let player = {lvl: 2};
       let enemy = getEnemy(player.lvl, multiplier);
       expect(enemy.attack).toEqual(3);
       expect(enemy.defense).toEqual(3);
       expect(enemy.speed).toEqual(3);
   });
});