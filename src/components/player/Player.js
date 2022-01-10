import Card from '../UI/Card';
import FightInventory from '../inventory-items/FightInventory';
import {useContext, useState} from 'react';
import GameContext from '../../store/game-context';
import {formatName} from '../../util/format';
import classes from './Player.module.css';

const Player = () => {
    const [state, playerCtx] = useContext(GameContext);
    const [showItems, setShowItems] = useState(false);

    const playerUseItem = (item, index) => {
        playerCtx.updateItem(item, index, -1);
    }
    
    const showItemsHandler = () => {
        setShowItems(true);
    }

    const closeInventoryHandler = () => {
        setShowItems(false);
    }

    const formatInventory = (inventory) => {
        let updated = {};
        let items = [];
        for(let i = 0; i < inventory.length; i++) {
            let it = inventory[i];
            let name = it.name;
            if(updated[name] === undefined) {
                updated[name] = {...it, quantity: 1};
            } else {
                updated[name].quantity += 1;
            }
        }
        for(const [key, item] of Object.entries(updated)) {
            items.push(item);
        }
        return items;
    }

    const player = state.player;

    return (
        <Card>
            <div>
                <img src={player.playerImage} alt="Player Tag"/>
            </div>
            <div>
                <h1>{formatName(player.name)}</h1>
                <h3>Level: {player.playerLvl}</h3>
                <h3>HP: {player.health}</h3>
                {!showItems && <button onClick={showItemsHandler}>View Inventory</button>}
                {showItems && <FightInventory
                    items={formatInventory(player.inventory)}
                    useItem={playerUseItem}
                    closeInventory={closeInventoryHandler}
                />}
                <div className={classes.outerHealth}>
                    <div id="innerHealthBar" style={{width: `${player.exp}%`}} className={classes.healthBar}/>
                </div>
            </div>
        </Card>
    )
}

export default Player;