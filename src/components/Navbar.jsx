import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/navbar.css";

export default function MyNavbar() {
  return (
    <Navbar
      style={{ textDecoration: "none", backgroundColor: "" }}
      className="navbar"
    >
      <Nav.Link className="navlink" href="#home">
        Home
      </Nav.Link>
      <Nav.Link className="navlink" href="#about">
        About
      </Nav.Link>
      <Nav.Link className="navlink" href="#home">
        Your Logo!
      </Nav.Link>
      <Nav.Link className="navlink" href="#services">
        Services
      </Nav.Link>
      <Nav.Link className="navlink" href="#contact">
        Contact
      </Nav.Link>
      <div className="nav-links"></div>
    </Navbar>
  );
}
