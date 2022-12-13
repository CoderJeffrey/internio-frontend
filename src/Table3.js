import React from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import "./Table.css";
import {useState, useEffect} from 'react';
import { Login } from './Login';

function Table3(jobs) {
  var check = true;

  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState({});
  const getData = () =>{
    console.log("jobs")
    axios.get("https://internio-backend-cloud.herokuapp.com/jobs")
    .then((res) => {
      setData(res.data);
    })
  };

  const getAugData = () =>{
    axios.get(localStorage.getItem('url'))
    .then((res) => {
      console.log(res);
      window.requestURL = "";
      if (!Array.isArray(res.data)){
        let array = [res.data]
        setData(array);
      }
      else{
        setData(res.data);
      }
    })
  };

  useEffect(() =>{
    if(localStorage.getItem('url') !== null && localStorage.getItem('url') !== undefined){
      console.log("a");
      getAugData();
    }
    else{
      console.log("b");
      getData();
    }
  }, []);

  const handelUpdate = (jobId) =>{
    let url = "https://internio-backend-cloud.herokuapp.com/addJob/" + localStorage.getItem('userID') + "/" + jobId;
    console.log(url);
    axios.get(url)
    .then((response) => {
      console.log(response);
    })
  }

    return (
        <div className="wrapper">
          <div className="table">
            <div className="row header">
              <div className="cell">
                Company
              </div>
              <div className="cell">
                Position
              </div>
              <div className="cell">
                Location
              </div>
              <div className="cell">
                Availability
              </div>
              
            </div>

          {data.map((job) => {
            console.log(job);
                return (
                    <div className="row">
                      <div className="cell" data-title="Company">
                        {job.companyName}
                      </div>
                      <div className="cell" data-title="Position">
                        <a href={job.jobLink}>
                        {job.position}
                        </a>
                      </div>
                      <div className="cell" data-title="Location">
                        {job.location}
                      </div>
                      <div className="cell" data-title="Location">
                        {job.valid == true ? <p>Available</p> : <p>Not Available</p>}
                      </div>
                      
                    </div>
                );




          }


          )}
        </div>
      </div>
    )
  

}


export default Table3;
