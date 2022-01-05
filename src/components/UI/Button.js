import classes from './Button.module.css';

const Button = props => {

    const clickEventHandler = () => {
        props.callFn();
    }
    
    const styling = props.extraClasses ? `${props.extraClasses} ${classes.button}` : classes.button;

    return (
        <button className={styling} onClick={clickEventHandler}>{props.label}</button>
    )
}

export default Button;