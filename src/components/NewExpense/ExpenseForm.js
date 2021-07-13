import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) => {

    const [newtitle, setNewTitle] = useState('');
    const [newamount, setNewAmount] = useState('');
    const [newdate, setNewdate] = useState('');

    const titleChangeHandler = (event) => {
        console.log('title change');
        console.log(event.target.value);
        setNewTitle(event.target.value);
    }
    const datechangeHandler = (event) => {
        console.log('title change');
        console.log(event.target.value);
        setNewdate(event.target.value);
    }
    const amountchangeHandler = (event) => {
        console.log('title change');
        console.log(event.target.value);
       
        setNewAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();


        const expenseData = {
            title: newtitle,
            amount: newamount,
            date: new Date(newdate),
          };
      
          console.log(expenseData);
        props.getData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewdate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={newtitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={newamount} onChange={amountchangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={newdate} onChange={datechangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;