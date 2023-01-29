import ExpenseItem from '../Expenses/ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    return (<ul className='expenses-list'>
        {props.items.map((expense) =>
            <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>)}
    </ul>)
}

export default ExpensesList;