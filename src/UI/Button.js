
import classes from '../Components/Button.module.css';

const Button = (props) => {

    const clickButon = (event) => {
        props.onClick();
    }
   

    return (
        <button 
        className={classes.button}
        type={props.type || 'button'}
        onClick={clickButon}
        >   
        {props.children}</button>)
}

export default Button;