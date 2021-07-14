import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import React, {useState} from 'react';

function Expenses(props) {
  
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('-----------------------')
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    };

      return  (
          <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <Card className="expenses">                   
                    {props.items.map((expense) => ( <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}  /> ))}
                </Card>
            </div>
            )
}

export default Expenses