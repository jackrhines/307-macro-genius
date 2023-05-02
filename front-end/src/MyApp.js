import React, {useState, useEffect} from 'react'
import Table from './Table'
import Form from './Form';
import axios from 'axios';



function MyApp() { 
  const [characters, setCharacters] = useState([]);

  async function fetchAll(){
    try {
      const response = await axios.get('http://localhost:8000/users');
      return response.data.users_list;     
    }
    catch (error){
      //We're not handling errors. Just logging into the console.
      console.log(error); 
      return false;         
    }
 }

  async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:8000/users', person);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
 }

 useEffect(() => {
  fetchAll().then( result => {
    if (result)
    setCharacters(result);
  });
}, [] );

 function updateList(person) { 
  makePostCall(person).then( result => {
  if (result && result.status === 201)
      setCharacters([...characters, result.data] );
  });
}

async function removeOneCharacter (index) {
  try {
    const toDelete = characters.filter((character, i) => {
      return i === index
    });
    axios.delete ('http://localhost:8000/users/' + toDelete[0]._id);

    const updated = characters.filter((character, i) => {
           return i !== index;
         });
    setCharacters(updated);

  }
  catch (error) {
    console.log(error);
    return false;
  }
  
}

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )
}




export default MyApp;