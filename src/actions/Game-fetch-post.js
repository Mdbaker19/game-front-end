
export const postPlayerData = async (player) => {
    let res;
    let filteredPlayerData = {};
    let saveId = '';
    for(const key in player) {
        if(key === 'saveId') {
            saveId = parseInt(player[key]);
        } else if(key === 'lvl') {
            // TODO: update later
            filteredPlayerData[key] = ~~(Math.random() * 50) + 1;
        } else {
            filteredPlayerData[key] = player[key];
        }
    }
    try {
        const data = await fetch(`http://localhost:8080/save/${saveId}`, {
            method: "POST",
            body: JSON.stringify(filteredPlayerData),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(data);
        res = await data.json();
    } catch (err) {
        res = err.message || "Something failed with the save";
    }
    return {
        res
    }
}
