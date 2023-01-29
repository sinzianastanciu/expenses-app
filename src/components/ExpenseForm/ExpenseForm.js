import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formActivated, setFormActivated] = useState(false);



    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpenseData(expenseData);
        setFormActivated(false);
    }

    const cancelHandler = (event) => {
        setFormActivated(false);
    }

    const activateFormHandler = (event) => {
        setFormActivated(true);
    }

    const formToBeDisplayed = <form onSubmit={submitHandler} onReset={cancelHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangedHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangedHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>date</label>
            <input type='date' min='2019-01-01' value={enteredDate} max='2022-12-31' onChange={dateChangedHandler}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='reset'>Cancel</button>
        <button type='submit'>Add expense</button>
    </div>
</form>;

const buttonToBeDisplayed = <button onClick={activateFormHandler}>Add New Expense</button>

    return (
        formActivated ? formToBeDisplayed : buttonToBeDisplayed
    );
}

export default ExpenseForm;