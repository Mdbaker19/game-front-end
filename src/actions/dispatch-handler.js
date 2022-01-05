export const dispatchHandler = (state, action) => {
    console.log("ACTION: ", action);
    switch (action.type) {
        case 'USE_ITEM':
            console.log(state);
            // let {inventory} = state.player;
            // let {item} = action.payload.item;
            // let {value} = action.payload.status; // +1 or -1 for use or buy item?
            let updatedPlayer = {};
            console.log("TRying to use An ITem");
            // for(let i = 0; i < inventory.length; i++) {
            //     if(item === inventory[i]) {
            //         do not add, something here and ^^... placeholder for now
                // }
            // }
            return {player: updatedPlayer, ...state};
        case 'DAMAGE':
            return {enemy: action.payload, ...state};
        case 'START_GAME':
            let player = action.payload?.saveChoice?.data;
            const enemy = action.payload?.enemy;
            // player.saveId = action.payload?.saveChoice?.saveId;
            return {player, enemy, ...state};
            // return {player, enemy, ...state};
        case 'd':
            return {newData: '', ...state};
        case 'e':
            return {newData: '', ...state};
        case 'f':
            return {newData: '', ...state};
        default:
            return state;
    }
}
