import React from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import "./Table.css";
import {useState, useEffect} from 'react';

function Table() {

  const [data, setData] = useState([]);
  const getData = () =>{
    axios.get("https://internio-backend-cloud.herokuapp.com/jobs")
    .then((res) => {
      setData(res.data);
    })
  };

  useEffect(() =>{
    getData();
  }, []);

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
              Others
            </div>
          </div>
          {data.map((job)=>{

              return (
                  <div className="row">
                  <div className="cell" data-title="Company">
                    {job.companyName}
                  </div>
                  <div className="cell" data-title="Position">
                    {job.position}
                  </div>
                  <div className="cell" data-title="Location">
                    {job.location}
                  </div>
                    <div className="cell" data-title="Location">
                      login
                    </div>
                  </div>
              );

            })}


        </div>
      </div>

  )

  

}


export default Table;

