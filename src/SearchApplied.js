import { Navigate } from "react-router-dom"
import { LoginContext } from "./Context"
import React, { useContext } from "react"
import Navbar from "./Navbar"
import Table3 from "./Table3"
import "./GuestMainPage.css"
function SearchApplied() {
        return (
            <div className="outside_guest">
                <div className="inside_guest">
                    <div>
                        <Navbar userAccess={true}/>
                        <Table3 userAccess={true}/>
                    </div>
                </div>
            </div>
            
        );
}

export default SearchApplied;