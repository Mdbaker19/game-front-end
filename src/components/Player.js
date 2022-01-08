import Card from './UI/Card';
import FightInventory from './UI/FightInventory';
import {useContext, useState} from 'react';
import GameContext from '../store/game-context';
import {formatName} from '../util/format';
import classes from './Player.module.css';

const Player = () => {
    const [state, playerCtx] = useContext(GameContext);
    const [showItems, setShowItems] = useState(false);

    const playerUseItem = (item) => {
        playerCtx.updateItem(item, -1);
    }
    
    const showItemsHandler = () => {
        setShowItems(true);
    }

    const closeInventoryHandler = () => {
        setShowItems(false);
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
                    items={player.inventory}
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