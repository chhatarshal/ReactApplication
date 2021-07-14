import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


    const handleSelection = event => {
        console.log(event.target);
        console.log('on change');
        props.selected(event.target.value);
    }

    const dropdownChangeHandler = (event) => {
        console.log(props.selected);
        props.onChangeFilter(event.target.value);
      };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;