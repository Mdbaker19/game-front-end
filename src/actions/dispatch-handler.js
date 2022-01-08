
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
            return {...state, player: updatedPlayer};
        case 'DAMAGE':
            let updatedPlayerH = {...state.player, health: state.player.health - 1};
            return {...state, player: updatedPlayerH, enemy: action.payload};
        case 'START_GAME':
            const player = action.payload?.player;
            const enemy = action.payload?.enemy;
            return {...state, player, enemy};
            // return {player, enemy, ...state};
        case 'd':
            return {...state, newData: ''};
        case 'e':
            return {...state, newData: ''};
        case 'f':
            return {...state, newData: ''};
        default:
            return state;
    }
}
