import {useState} from 'react'

function Form(props) {
    const [food, setFood] = useState(
        {
            name: "",
            calories: "",
        }
    );
    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "job")
            setFood(
                {name: food['name'], calories: value}
            );
        else
            setFood(
                {name: value, calories: food['calories']}
            );
    }

    function submitForm() {
        props.handleSubmit(food);
        setFood({name: '', calories: ''});
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