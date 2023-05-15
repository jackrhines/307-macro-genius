import React, {useState, useEffect} from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios'
import "./Food.css"

function Food() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchAll().then( result => {
      if (result)
        setFoods(result);
    });
  }, [] );

  async function fetchAll(){
    try {
      const response = await axios.get('http://localhost:8000/foods');
      return response.data.foods_list;
    }
    catch (error){
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function makePostCall(food){
    try {
      return await axios.post('http://localhost:8000/foods', food);
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(food) {
    makePostCall(food).then( result => {
      if (result && result.status === 201)
        setFoods([...foods, result.data] );
    });
  }

  async function makeDeleteCall(id) {
    try {
      return await axios.delete('http://localhost:8000/foods/' + id)
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  function removeOneFood(index) {
    const foodToDelete = foods[index]["_id"]
    console.log(foods, foods[index])

    makeDeleteCall(foodToDelete).then(result => {
      if (result && result.status === 204) {
        const updated = foods.filter((character, i) => {
          return i !== index
        });

        setFoods(updated)
      }
    })
  }

  return (
    <div className="body">
      <div className="calculate-page-overlap">
        <div className="top-logo-text-wrapper">MacroGenius</div>
      </div>
      <div className="food-input-grey-body">
        <Table foodData={foods} removeFood={removeOneFood}/>
        <Form handleSubmit={updateList} />
      </div>
    </div>
  );
}

export default Food;