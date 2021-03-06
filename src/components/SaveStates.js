// import PropTypes from 'prop-types';
import {useContext} from 'react';
import GameContext from '../store/game-context';
import {getEnemy} from '../util/enemyCreations';
import SaveInventoryView from '../components/inventory-items/Inventory-view';
import classes from './SaveState.module.css';
import AccountView from '../components/UI/AccountView';

const SaveStates = props => {

    const [state, loginCtx] = useContext(GameContext);
    
    const playerDataUI = (playerSaveOne) => {
        console.log(playerSaveOne);
        return (
               <>
                    Level: {playerSaveOne.lvl},
                    Player Lvl: {playerSaveOne.playerLvl},
                    HP: {playerSaveOne.health},
                    Wallet: ${playerSaveOne.wallet}
                    {<AccountView items={playerSaveOne.inventory} stats={playerSaveOne.stats}/>}
                </>
        );
    }
    
    const loadSaveHandler = (id) => {
        let saveChoice = props.saveOptions.filter(save => save.saveId === id)[0];
        let player = saveChoice.data;
        player.saveId = saveChoice.saveId;
        // a multiplied effect on enemy
        let enemyRandomizer = ~~(Math.random() * 5);
        let enemy = getEnemy(player.lvl, enemyRandomizer);
        let data = {player, enemy};
        loginCtx.startGame(data);
        props.loadThisSave();
    }
    
    return (
        <>
        <h1>Welcome {props.playerName}</h1>
            {props.saveOptions.map((s, idx) => {
                let save = s.data;
                return <div className={classes.saveState} key={`${idx}_div`}>
                            <SaveInventoryView inventory={save.inventory} />
                            <h5 className={classes.saveStateHeading} key={`${idx}_tag`}>{playerDataUI(save)}</h5>
                            <button key={`${idx}_button`} onClick={loadSaveHandler.bind(this, s.saveId)}>Load</button>
                        </div>
            })}
        </>
    )
}

// SaveStates.propTypes = {
//     saveOptions: PropTypes.array,
// }

export default SaveStates;
