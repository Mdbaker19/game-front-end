export const getPlayerData = async (name) => {
    let saveDataForLaterRes, playerNameRes, isSavesLoadedRes, errorRes;
    try {
        const data = await fetch(`http://localhost:8080/account/${name}`);
        const res = await data.json();
        // this will contain the save info with the save choice having the saveState id in it to then be
        // used to save the game later
        let saveDataForLoadingLater = [];
        for(const save of res) {
            saveDataForLoadingLater.push({saveId: save.id, data: JSON.parse(save.data)});
        }
        saveDataForLaterRes = saveDataForLoadingLater;
        playerNameRes = name;
        isSavesLoadedRes = true;
    } catch (err) {
        errorRes = "Sorry, something seems to be wrong here";
    }
    
    return {
        saveDataForLaterRes,
        playerNameRes,
        isSavesLoadedRes,
        errorRes
    }
    
}
