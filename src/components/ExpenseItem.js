import './ExpenseItem.css';

function ExpeseItem(props) {
      return  (
            <div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item_description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            )
}

export default ExpeseItem