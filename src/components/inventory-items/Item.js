import classes from './Item.module.css';

const Item = props => {
    
    const {item} = props;
    
    const useItemHandler = () => {
        props.useItem(item);
    }
    
    return (
        <div className={classes.item}>
            <p>{item.quantity}X {item.name}</p>
            <button onClick={useItemHandler}>Use Item</button>
        </div>
    )
}

export default Item;