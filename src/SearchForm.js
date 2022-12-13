import React, {useState} from 'react'
import "./SearchForm.css"
import axios from 'axios';
import Table from "./Table"
import SearchResult from "./SearchResult"
import { Router, useNavigate } from 'react-router-dom';
import './config'

function SearchForm() {
  const navigate = useNavigate();
  const [searchCriteria, setCriteria] = useState({searchTerm: "", showAvailable: false})
  const [searchData, setData] = useState({data: ""})

  function handleSearchClick(e){
    let searchURL = "https://internio-backend-cloud.herokuapp.com/search/" + searchCriteria.searchTerm;
    localStorage.setItem('url', searchURL);
    console.log(searchURL)
    navigate("/search-result")
  }

  function handleAvail(e){
    if (localStorage.getItem('userID') === undefined){
      alert("Login expired please login again");
      navigate("/login");
    }
    let defaultURL = "https://internio-backend-cloud.herokuapp.com/searchUser/" + localStorage.getItem('userID');
    localStorage.setItem('url', defaultURL);
    console.log(defaultURL);
    navigate("/search-applied")
  }

  function handleClearClick(){
    localStorage.removeItem('url');
    searchCriteria.showAvailable = false;
    navigate("/search-result")
  }

    return (
      <>
        <form className="formContainer">
          <label className="checkboxDesc">
          </label>
          <button
          className="searchButton"
          onClick={handleAvail}>
            Show Applied
          </button>
          <input
            type="search"
            className="searchField"
            id="input"
            placeholder="Search by company name"
            value={searchCriteria.searchTerm}
            onChange={e=> setCriteria({...searchCriteria, searchTerm: e.target.value})}
          />
          <button
            className="searchButton"
            onClick={handleSearchClick}>
              Search
          </button>
          <button
            className="clearButton"
            onClick={handleClearClick}>
              Reset Filters
          </button>
        </form>
    </>
    );
}

export default SearchForm;
