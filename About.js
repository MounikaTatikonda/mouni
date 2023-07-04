import React from "react";
import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard.css";
import  "./About.css";

function About() {
  return (
    <div className="About" >
      <div className="header">
        <nav>
          <ul className="navs">
            <Link to="/Log" className="btn ">
              Login
            </Link>&emsp;
            <Link to="/User" className="btn ">
             User
            </Link>&emsp;
            {/*<Link to="/Dashboard" className="btn ">
             Dashboard
            </Link>&emsp;
            <Link to="/search">
              <input
                type="text"
                style={{ marginLeft: "30" }}
                className="search-input"
                placeholder="search here"

              ></input>
            </Link>&emsp;
            <Link to="/cart" className="btn ">
              Cart
            </Link>&emsp;
            <Link to="/Girls dresses" className="btn ">
             </Link>*/}
            
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default About;
