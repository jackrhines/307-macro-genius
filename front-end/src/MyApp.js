import React, {useState, useEffect} from 'react'
import Table from './Table'
import Form from './Form'
import axios from 'axios'

function MyApp() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchAll().then( result => {
            if (result)
                setCharacters(result);
        });
    }, [] );

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
            return await axios.post('http://localhost:8000/users', person);
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    function updateList(person) {
        makePostCall(person).then( result => {
            if (result && result.status === 201)
                setCharacters([...characters, result.data] );
        });
    }

    async function makeDeleteCall(id) {
        try {
            return await axios.delete('http://localhost:8000/users/' + id)
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    function removeOneCharacter(index) {
        const personToDelete = characters[index]["_id"]
        console.log(characters, characters[index])

        makeDeleteCall(personToDelete).then(result => {
            if (result && result.status === 204) {
                const updated = characters.filter((character, i) => {
                    return i !== index
                });

                setCharacters(updated)
            }
        })
    }

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={removeOneCharacter}/>
        <Form handleSubmit={updateList} />
      </div>
    );
}

export default MyApp;