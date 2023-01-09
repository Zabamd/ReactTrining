import ExpenseItem from "./ExpenseItem";
import "./style/Expenses.css";

const Expenses = ({expenses}) => {
  
  return (
    <div className="expensesWrapper">
      {expenses.map((expense, id) => {
        return <ExpenseItem key={id} {...expense} />;
      })}
    </div>
  );
};

export default Expenses;