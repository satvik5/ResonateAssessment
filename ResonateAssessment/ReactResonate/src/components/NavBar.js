import axios from "axios";
import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand id="title-text" href="/">
          <img
            id="navbar-image"
            alt=""
            src="/people.svg"
            className="d-inline-block align-top"
          />{" "}
          My Contacts
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;
