import React, { Component } from 'react';
import {
    Link,
    NavLink,
  } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link  className="navbar-brand" to="/">NewsOnline</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="nav-dropdown input-group ms-auto">
                            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="Ind">India</option>
                                <option value="2">US</option>
                                <option value="3">UK</option>
                                <option value="">Singapore</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navbar2 sticky-top bg-white">
                <ul className="nav justify-content-center border border-top border-bottom">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"}  to="/all">All</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"}  to="/business">Business</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"}  to="/entertainment">Entertainment</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"}  to="/health">Health</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"}  to="/science">Science</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"} to="/sports">Sports</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "navbarlink nav-link text-black active-link" : "navbarlink nav-link"} to="/technology">Technology</NavLink> 
                    </li>
                </ul>
            </div>
        </>
        
    )
  }
}
