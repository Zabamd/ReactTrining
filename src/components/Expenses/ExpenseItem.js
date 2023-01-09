import "./style/Expenseitem.css";
import { useState } from "react";

const ExpenseItem = ({ itemName, itemPrice, date }) => {
  const [isPlanned, setIsPlanned] = useState(false);

  const onClick = () => {
    setIsPlanned(!isPlanned);
  };

  return (
    <div className="expenseWrapper">
      <h2 className="itemHeading">{itemName}</h2>
      <div className="itemDate">{date}</div>
      <div className="itemPrice">{itemPrice} $</div>
      <div onClick={onClick} className="isPlanned">
        {(isPlanned && <p>⏳</p>) || (!isPlanned && <p>Plan Expense</p>)}
      </div>
    </div>
  );
};

export default ExpenseItem;
