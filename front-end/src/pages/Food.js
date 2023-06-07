import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import "./Food.css";
import Cookies from "universal-cookie";
import endOfDay from "date-fns/endOfDay";
import startOfDay from "date-fns/startOfDay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cookies = new Cookies();

function Food() {
  const [foods, setFoods] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const curUser = cookies.get("USER");
    setCurrentUser(curUser);

    fetchAll(curUser).then((result) => {
      if (result) setFoods(result);
    });
  }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchAll(user) {
    try {
      const start = startOfDay(date);
      const end = endOfDay(date);

      const response = await axios.get(
        "http://localhost:8000/foods?user=" +
          user +
          "&startDate=" +
          start.toString() +
          "&endDate=" +
          end.toString()
      );
      return response.data.foods_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function makePostCall(food) {
    try {
      return await axios.post("http://localhost:8000/foods", food);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(food) {
    makePostCall(food).then((result) => {
      if (result && result.status === 201) setFoods([...foods, result.data]);
    });
  }

  async function makeDeleteCall(id) {
    try {
      return await axios.delete("http://localhost:8000/foods/" + id);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function removeOneFood(index) {
    const foodToDelete = foods[index]["_id"];

    makeDeleteCall(foodToDelete).then((result) => {
      if (result && result.status === 204) {
        const updated = foods.filter((character, i) => {
          return i !== index;
        });

        setFoods(updated);
      }
    });
  }

  return (
    <div className="body">
      <div className="calculate-page-overlap">
        <div className="top-logo-text-wrapper">MacroGenius</div>
      </div>
      <div className="food-input-grey-body">
        <DatePicker selected={date} onChange={(d) => setDate(d)}>Date</DatePicker>
            <div className="foodTableWrapper">
                <Table foodData={foods} removeFood={removeOneFood} />
            </div>
        <Form type="foods" handleSubmit={updateList} user={currentUser} />
      </div>
    </div>
  );
}

export default Food;
