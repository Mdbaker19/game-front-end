import {missChance, getDamage} from '../util/fightLogic';

describe('fightLogic', () => {
   test('miss chance is calculated as expected', () => {
       let zeroChance = missChance(20, 5);
       let halfChance = missChance(100, 75);
       let baseLevel = missChance(40, 8);
       expect(baseLevel).toBe(5);
       expect(halfChance).toBe(50);
       expect(zeroChance).toBe(0);
   });
   test('damage is calculated as expected', () => {
       let higher = getDamage(10, 5);
       let lower = getDamage(2, 8);
       expect(higher).toBeGreaterThanOrEqual(2);
       expect(lower).toBeLessThanOrEqual(3);
   });
});