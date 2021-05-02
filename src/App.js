import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const getDataFromAPI = () => {
    fetch('https://swapi.dev/api/people/?search=sky').then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response.results)
      for (var i = 0; i < response.results.length; i++) {
        data.push(response.results[i].name)
      }
      setData(data);
    })
  }
  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)} />
      {data.filter((val) => {
        if (searchTerm === "") {
          return "";
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div classname="user" key={key}>
            <p>{val.name}</p>
          </div>
        );
      })}
    </div>

  );
}

export default App;
