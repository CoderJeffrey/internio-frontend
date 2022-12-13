import { Navigate } from "react-router-dom"
import { LoginContext } from "./Context"
import React, { useContext } from "react"
import Navbar from "./Navbar"
import Table2 from "./Table2"

function UserMainPage() {
        return (
            <div className="outside_guest">
                <div className="inside_guest">
                    <div>
                        <Navbar userAccess={true}/>
                        <Table2 userAccess={true}/>
                    </div>
                </div>
            </div>
           
        );
}

export default UserMainPage;