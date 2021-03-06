import './App.css';
import Player from './components/player/Player';
import Enemy from './components/Enemy';
import Control from './components/UI/Control';
import SaveStates from './components/SaveStates';
import LoadForm from './components/LoadForm';
import GameProvider from './store/game-provider';
import {getPlayerData} from './actions/Game-fetch-get';
import {useState} from 'react';

// store / shop
// refactor items display to have a count rather than list it multi times

function App() {

    const [isPlayerExists, setIsPlayerExists] = useState(false);
    const [isSavesLoaded, setIsSavesLoaded] = useState(false);

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
    
    const pickThisSaveHandler = () => setIsPlayerExists(true);
    
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
                            <Player />
                            <Enemy />
                        </section>
                        <section className="controls">
                            <Control text={"Fight"} />
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
