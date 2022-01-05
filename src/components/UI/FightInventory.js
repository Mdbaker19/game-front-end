import Item from './Item';
import Button from './Button';
import classes from './FightInvetory.module.css';

const FightInventory = props => {

    const playerUseItem = (item) => {
        props.useItem(item);
    }
    
    const closeFightInventoryHandler = () => {
        props.closeInventory();
    }

    return (
        <section className={classes.fullBox}>
            <Button extraClasses={classes.alignEnd} callFn={closeFightInventoryHandler} label={"Close"} />
            <div className={classes.itemOptions}>
                {props.items.map((item, idx) => {
                    return <Item key={`${idx}_${item.name}`}
                                 item={item}
                                 useItem={playerUseItem.bind(null, item)}
                    />
                })}
            </div>
        </section>
    )
}

export default FightInventory;