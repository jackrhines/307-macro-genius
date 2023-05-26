import {useState} from 'react'

function Form(props) {
  const [food, setFood] = useState(
    {
      name: "",
      calories: "",
      user: "",
    }
  );
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "calories")
      setFood(
        {name: food['name'], calories: value, user: props.user}
      );
    else
      setFood(
        {name: value, calories: food['calories'], user: props.user}
      );
  }

  function submitForm() {
    props.handleSubmit(food);
    setFood({name: '', calories: '', user: ''});
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={food.name}
        onChange={handleChange} />
      <label htmlFor="calories">Calories</label>
      <input
        type="text"
        name="calories"
        id="calories"
        value={food.calories}
        onChange={handleChange} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;