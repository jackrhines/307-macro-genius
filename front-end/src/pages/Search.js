import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import styles from './Search.module.css';



const Search = () => {
    const [msgs, setMessages] = useState([]);

    async function makePostCall(msg){
        try {
        return await axios.post('http://localhost:8000/search', msg);
        }
        catch (error) {
        console.log(error);
        return false;
        }
    }
    function updateList(msg) {
        makePostCall(msg).then( result => {
        if (result.status === 201)
            setMessages([...msgs, result.data]);
            
        });
    }


    return(
        <div className={styles.body}>
            <div className={styles.searchbar}>
                <SearchForm handleSubmit={updateList} />
                <div>
                    {msgs.map((item) => (
                        <div>
                            <hr />
                            <p>Food Info: {item.content}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search;