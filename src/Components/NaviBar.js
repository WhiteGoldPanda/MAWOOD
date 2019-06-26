import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #8e44ad;
  }
  .navbar-brand,
  .navbar-nav {
    color: #2f3640;

    &: hover {
      color: #2f3640;
    }
    .nav-bar-custom {
      color: #2f3640;
      margin-left: 20%;
    }
  }
`;

export const NaviBar = () => (
  <Styles>
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">IDK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/" className="nav-bar-custom">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="nav-bar-custom">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contacts" className="nav-bar-custom">
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
