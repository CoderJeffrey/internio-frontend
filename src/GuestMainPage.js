import React from "react";
import Navbar from "./Navbar"
import Table from "./Table"
import "./GuestMainPage.css"

function GuestMainPage() {
    return (
        <div className="outside_guest">
            <div className="inside_guest">
                <div>
                    <Navbar userAccess={false}/>
                    <Table userAccess={false}/>
                </div>
            </div>
        </div>
        
        
    );
}

export default GuestMainPage;