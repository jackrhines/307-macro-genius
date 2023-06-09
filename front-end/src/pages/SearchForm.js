import React, { useState } from "react";
import "./Search.module.css";

function SearchForm(props) {
  const [food, setFood] = useState({
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "message") setFood({ message: value });
    else setFood({ message: value });
  }

  function submitForm() {
    props.handleSubmit(food);
    setFood({ message: "" });
  }

  return (
    <form>
      <label htmlFor="message"></label>
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Enter a food to learn more about its nutrition..."
        value={food.message}
        onChange={handleChange}
      />

      <input type="button" value="Search" onClick={submitForm}  />
    </form>
  );
}
export default SearchForm;
