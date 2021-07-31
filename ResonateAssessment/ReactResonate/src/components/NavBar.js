import axios from "axios";
import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

function NavBar(props) {
  const text = props.text;
  const imgSrc = props.img;
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand id="title-text" href="/">
          <img
            id="navbar-image"
            alt=""
            src={imgSrc}
            className="d-inline-block align-top"
          />{" "}
          {text}
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;
