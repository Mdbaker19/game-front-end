import {useState} from 'react';

const SaveInventoryView = props => {
    const [isShowInventory, setIsShowInventory] = useState(false);
    // TODO: how do i do a state update for each individual inventory view...
    return (
        <>
            { isShowInventory && props.inventory.map((item, idx) => {
                return <p key={idx}>item.name</p>
            })} 
        </>
    )
}

export default SaveInventoryView;