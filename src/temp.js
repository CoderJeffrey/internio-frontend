import React from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import "./Table.css";

async function getData(){
  let getUrl = "https://internio-backend-cloud.herokuapp.com/jobs"
  console.log(getUrl);
  const promise = axios.get(getUrl)
  const data = promise.then((response) => response.data)
  return data;
}

// table component
 async function Table( {userAccess, data} ) {
  // data is passed into Table and contains all the jobs that should be displayed
  // there should be no backend calls within Table
  const res = await getData();
  console.log("res");
  console.log(res);
  return (
    <div className="list-container">
      <ul className="job-list">
        {.forEach((job) => { 
            console.log(job)
          return (
            <div className="row">
                <li>{job.position}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}


export default Table;