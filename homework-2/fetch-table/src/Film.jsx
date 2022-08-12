/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'


const Film = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios.get("https://swapi.dev/api/people").then(res => {
      setData(res.data.results);
      setFilteredData(res.data.results);
      setIsLoading(false);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    const getSearch = e.target.value
    setQuery(getSearch);
    if(getSearch.length > 0) {
      const searchData = data.filter(item => item.name.toLowerCase().includes(getSearch))
      setData(searchData);
    } else {
      setData(filteredData);
    }
  }

  const deleteForm = (e) => {
    if(e.target.className === "delete") {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }

  return (
    <div className="table">
      <input className="search" type="text" name="search" value={query} onChange={(e) => handleSearch(e)} placeholder="search" />
      {isLoading && (
        <ThreeDots color="antiquewhite" height={80} width={80} />
      )}
      <select className="select">
        <option value="">...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="n/a">n/a</option>
      </select>
      <table className="customer">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Films</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.map((item, index) => (
        <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.gender}</td>
              <td>{item.films}</td>
              <td><button className="deleteButton"><img className="delete" onClick={deleteForm} src="https://img.icons8.com/external-others-inmotus-design/40/000000/external-Delete-round-icons-others-inmotus-design-3.png"/></button></td>
            </tr>
        </tbody>
          ))}
      </table>
    </div>
  );
};

export default Film;
