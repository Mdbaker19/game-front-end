import Item from '../inventory-items/Item';
import Button from '../UI/Button';
import classes from './FightInvetory.module.css';

const FightInventory = props => {

    // not great but for now : pass index to remove that item from inventory array
    const playerUseItem = (item, index) => {
        props.useItem(item, index);
    }
    
    const closeFightInventoryHandler = () => {
        props.closeInventory();
    }

    console.log(props);

    return (
        <section className={classes.fullBox}>
            <Button extraClasses={classes.alignEnd} callFn={closeFightInventoryHandler} label={"Close"} />
            <div className={classes.itemOptions}>
                {props.items.map((item, idx) => {
                    return <Item key={`${idx}_${item.name}`}
                                 item={item}
                                 useItem={playerUseItem.bind(null, item, idx)}
                    />
                })}
            </div>
        </section>
    )
}

export default FightInventory;