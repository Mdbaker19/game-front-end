import React from 'react';

const GameContext = React.createContext( {
   player: {},
   enemy: {},
   updateEnemyHandler: (enemy) => {},
   updateItem: (item) => {},
   startGame: (gameData) => {}
});

export default GameContext;