import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        {/*<th>ID</th>*/}
        <th>Name</th>
        <th>Calories</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.foodData.map((row, index) => {
    return (
      <tr key={index}>
        {/*<td>{row._id}</td>*/}
        <td>{row.name}</td>
        <td>{row.calories}</td>
        <td>
          <button onClick={() => props.removeFood(index)} type="remove">Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody foodData={props.foodData} removeFood={props.removeFood} />
    </table>
  );
}

export default Table;
