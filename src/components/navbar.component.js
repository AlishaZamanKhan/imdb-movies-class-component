import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/imdb_logo.jpg';


class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-dark"
        >
          <a className="navbar-brand" 
             href="/"
             style={{ color: "white"}}
          >
			  <img
			  	style={{ marginLeft:"6px", width:"5rem"}}
				src={logo}
				alt="null"
				
			  ></img>
          </a>
        </nav>
      </>
    );
  }
}

export default Navbar;
