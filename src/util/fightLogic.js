/**
 * Fights will take into account speed differences for a miss chance
 * and attacker's attack to defenders defense for damage
 * */

// how to make this better...?
export const missChance = (attackerSpeed, defenderSpeed) => {
    let speedDif = defenderSpeed - (attackerSpeed / 4);
    if(speedDif < 0) speedDif = 5;
    return 100 - (100 - speedDif);
}

export const getDamage = (attackerAttack, defenderDefense) => {
    // need to think on this too
    // if the attacker has more attack, min damage is 2 - 5 else it is 1 - 3
    return attackerAttack - defenderDefense > 0 ? ~~(Math.random() * 3) + 2 : ~~(Math.random() * 2) + 1;
} 