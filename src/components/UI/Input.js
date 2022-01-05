import {useRef} from 'react';
import classes from './Input.module.css';

const Input = props => {
    const userNameRef = useRef();

    return (
        <label>
            {props.label}
            <input className={props?.invalid ? `${classes.error} ${classes.label}` : classes.label} ref={userNameRef} placeholder={props.placeholder}/>
        </label>
    )
}

export default Input;