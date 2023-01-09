import { useState } from "react";

const ExpenseForm = ({onExpenseSubmit}) => {
  const [userInputs, setUserInputs] = useState({
    inputTitle: "",
    inputValue: 0,
    inputDate: "",
  });

  const onTitleChange = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, inputTitle: event.target.value };
    });
  };

  const onValueChange = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, inputValue: event.target.value };
    });
  };
  const onDateChange = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, inputDate: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userExpensesData = {
      expenseTitle: userInputs.inputTitle,
      expenseValue: userInputs.inputValue,
      date: new Date(userInputs.inputDate),
    };

    onExpenseSubmit(userExpensesData);

    setUserInputs(() => {
      return { inputTitle: "", inputValue: 0, inputDate: "" };
    });
  };

  return (
    <form className="formWrapper" onSubmit={onSubmitHandler}>
      <div className="inputsWrapper">
        <label for="titleInput">Title:</label>
        <input
          id="titleInput"
          type="text"
          name="title"
          value={userInputs.inputTitle}
          placeholder="Expense Title..."
          onChange={onTitleChange}
        />
        <label for="valueInput">Value:</label>
        <input
          id="valueInput"
          type="range"
          name="value"
          value={userInputs.inputValue}
          min="0"
          max="1000"
          step="0.01"
          onChange={onValueChange}
        />
        <label for="dateInput">Date:</label>
        <input
          id="dateInput"
          type="date"
          name="date"
          value={userInputs.inputDate}
          min="2017-05-13"
          max="2042-05-13"
          onChange={onDateChange}
        />
      </div>
      <div className="formFooter">
        <input type="submit" />
      </div>
    </form>
  );
};

export default ExpenseForm;
