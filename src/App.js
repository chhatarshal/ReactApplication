import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {  

   

  const addExpenseHandler = (expense) => {
    console.log('here is expense in app: ' + expense);
    console.log('here is expense in app: ' + expense.title);
    setExpenses((prevExpenses) => {
      console.log('here is expense in app:prevExpenses  ' + prevExpenses);
      return [expense, ...prevExpenses];
    });
  };


  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}></Expenses>
     </div>
  );
}

export default App;
