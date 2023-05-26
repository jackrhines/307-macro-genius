import React from 'react';
import "./Home.css";
import "./Calculate.module.css";

const Home = () => {
    const data = require('./Quotes.json');
    const index = Math.floor(Math.random() * data.quotes.length);


    return (
    <div className="quote-wrapper">
        <div className="quote">{data.quotes[index].quote}</div>
        <div className="author">~ {data.quotes[index].author}</div>
    </div>
    );
};
export default Home;
