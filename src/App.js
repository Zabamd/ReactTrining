import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";

const example = [
  { itemName: "Water", itemPrice: "18.99", date: "2048-10-02" },
  { itemName: "Water", itemPrice: "18.99", date: "2048-10-02" },
  { itemName: "Water", itemPrice: "18.99", date: "2048-10-02" },
];

const App = () => {
  
  const [data, setData] = useState(example);

  const onExpenseSubmit = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense
    };
    setData((prevData) => {
      prevData.push(expenseData);
      return prevData;
    });
  };

  return (
    <div className="App">
      <ExpenseForm onExpenseSubmit={onExpenseSubmit} />
      <Expenses expenses={data} />
    </div>
  );
};
export default App;
