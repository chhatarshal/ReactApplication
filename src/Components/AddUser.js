import Card from '../UI/Card';
import Button from '../UI/Button';
import React, {useState} from 'react';

const AddUser = (props) => {

    const handleSubmit = (event) => {
        console.log('On Submit.... ')
        console.log(enteredUsername);
        
        props.addUser(enteredUsername);
        setEnteredUsername('');
        
        event.preventDefault();
    }

    const handleClick = (event) => {
        console.log(event);
    }

    const [enteredUsername, setEnteredUsername] = useState('');

    const updateUserName = (event) => {
        setEnteredUsername(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <input type="text" id = "username" value={enteredUsername} placeholder="userName" onChange={updateUserName}></input>
                <input type="text" id = "password" placeholder="password"></input>
                <Button type="submit" onClick={handleClick}>Hit</Button>
            </form>
        </Card>
    )
}

export default AddUser