import { Button } from "@mui/material";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div className="hero-container">
      <Navbar
        style={{
          textDecoration: "none",
          backgroundColor: "",

          marginTop: "-4rem",
        }}
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
      </Navbar>
      <div
        style={{
          display: "flex",
          flexDirection: "column ",
          alignItems: "flex-start",
          marginTop: "15rem",
        }}
        className="main-content"
      >
        <div style={{}}>
          <h5
            style={{
              fontWeight: "350",
              fontSize: "5.5rem",
              color: "white", // dark green color
              lineHeight: "1.2",
              letterSpacing: "0.2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)", // add text shadow
            }}
          >
            Find your Trail's <br style={{ paddingBottom: "2rem" }} /> Discover
            your Story
          </h5>
        </div>

        <Button
          style={{
            backgroundColor: "#006400", // dark green color
            marginTop: "-6rem",
            marginLeft: "15rem",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)", // add box shadow
          }}
          className="call-to-action"
          variant="contained"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
