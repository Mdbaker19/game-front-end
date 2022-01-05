import './App.css';
import Player from './components/Player';
import Enemy from './components/Enemy';
import Control from './components/UI/Control';
import SaveStates from './components/SaveStates';
import LoadForm from './components/LoadForm';
import GameProvider from './store/game-provider';
import {getPlayerData} from './actions/Game-fetch-get';
import {postPlayerData} from './actions/Game-fetch-post';
import {useState} from 'react';

// fight functionality
// store / shop
// refactor to application wide context state management
// attack and get attacked from enemy
// use items, items need unique id's or something to pull from / update player inventory list data
// refactor items display to have a count rather than list it multi times
// get the enemy to update with the state change. the main app does not re-render on fight so enemy does not either..

function App() {

    const [isPlayerExists, setIsPlayerExists] = useState(false);
    const [isSavesLoaded, setIsSavesLoaded] = useState(false);

    const [player, setPlayer] = useState({});
    const [enemy, setEnemy] = useState({});
    const [playerName, setPlayerName] = useState("Unknown");

    const [saveOptions, setSaveOptions] = useState([]);

    const [error, setError] = useState(null);

    const loginHandler = async (name) => {
        const {saveDataForLaterRes,
            playerNameRes,
            isSavesLoadedRes,
            errorRes
        } = await getPlayerData(name);

        setSaveOptions(saveDataForLaterRes);
        setPlayerName(playerNameRes);
        setIsSavesLoaded(isSavesLoadedRes);
        setError(errorRes);
    }
    
    const pickThisSaveHandler = (data) => {
        setPlayer(data.player);
        setEnemy(data.enemy);
        setIsPlayerExists(true);
    }
    
    const saveGameHandler = async () => {
        const {res} = await postPlayerData(player);
        console.log("Game saved: ", res);
    }

    console.log("Main App re-render")
    return (
        <GameProvider>
            <div className="App">
                {isSavesLoaded && !isPlayerExists &&
                <section className="saveStateBox">
                    <SaveStates loadThisSave={pickThisSaveHandler} playerName={playerName} saveOptions={saveOptions}/>
                </section>
                }
                {isPlayerExists &&
                    <main className="container">
                        <section className="player-enemy">
                            <Player player={player}/>
                            <Enemy enemy={enemy}/>
                        </section>
                        <section className="controls">
                            <Control text={"Fight"} enemy={enemy}/>
                            <button onClick={saveGameHandler}>Save game</button>
                        </section>
                    </main>
                }
                {error && !isPlayerExists && <h1>{error}</h1>}
                {!isPlayerExists && !isSavesLoaded && <LoadForm onSubmit={loginHandler}/>}
            </div>
        </GameProvider>
    );
}

export default App;