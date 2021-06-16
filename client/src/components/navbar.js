import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
            
            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav mr-auto " >
                    <li className="nav-item ">
                    <Link to="/" className="nav-link">Home</Link>
                    </li >
                    <li className="nav-item ">
                    <Link to="/order" className="nav-link">New Order</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/ordersList" className="nav-link"> Orders Panel</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/agent" className="nav-link">Agent Panel</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/agentsList" className="nav-link">Agents List</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/commission" className="nav-link">Commission</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/reseller" className="nav-link">Reseller Panel</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/resellersList" className="nav-link">Resellers List</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/credit" className="nav-link">Credit</Link>
                    </li>
                    <li className="nav-item ">
                    <Link to="/pickup" className="nav-link">set pickup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
