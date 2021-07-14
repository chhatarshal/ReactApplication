import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import React, {useState} from 'react';

function Expenses(props) {
  
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    };



      return  (
          <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <Card className="expenses">
                    <ExpenseItem  date={props.expenses[0].date} amount={props.expenses[0].amount} title={props.expenses[0].title} />
                    <ExpenseItem  date={props.expenses[1].date} amount={props.expenses[1].amount} title={props.expenses[1].title} />
                    <ExpenseItem  date={props.expenses[2].date} amount={props.expenses[2].amount} title={props.expenses[2].title} />
                    <ExpenseItem  date={props.expenses[3].date} amount={props.expenses[3].amount} title={props.expenses[3].title} />
                </Card>
            </div>
            )
}

export default Expenses