import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const getYearFilteringHandler = (receivedYear) => {
        setYear(receivedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === year);

    

    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter selected={year} onGetYearFiltering={getYearFilteringHandler} />
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </li>
    )
}

export default Expenses;