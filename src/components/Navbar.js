import React  from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (<div className="nav">
        <ul className="nav--bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li>Random</li>
            

        </ul>
    </div>)
}