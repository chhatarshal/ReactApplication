import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const getDataHandler = (data) => {
        console.log('executed...');
        console.log('data: ' + JSON.stringify(data));
        props.onAddExpense(data);
    }

  return (
    <div className='new-expense'>
      <ExpenseForm getData={getDataHandler} />
    </div>
  );
};

export default NewExpense;