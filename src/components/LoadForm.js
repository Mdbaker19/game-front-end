import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import {useState} from 'react';
import classes from './LoadForm.module.css';

const LoadForm = props => {

    const [invalid, setInvalid] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        let input = e.target.elements[0].value.trim();
        if(input.length < 1) {
            setInvalid(true);
            return;
        }
        setInvalid(false);
        props.onSubmit(input);
    }
    
    return (
        <form className={classes.loadForm} onSubmit={submitHandler}>
            <Input invalid={invalid} label={"UserName"} placeholder={"Enter your name"}/>
            <Button disabled={invalid} label={"Login"} callFn={() => {}}/>
        </form>
    )

}

export default LoadForm;