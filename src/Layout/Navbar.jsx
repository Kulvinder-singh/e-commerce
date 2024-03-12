import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/e-commerce-logo.png";

const NavbarComp = ({ addCart }) => {
  const [tokenData, setTokenData] = useState();
  const loaction = useLocation();
  function handleLogout() {
    setTokenData(null);
    localStorage.clear();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenData(token);
  }, [loaction.pathname]);
  return (
    <>
      <div className="">
        <Navbar
          expand="lg"
          className="py-3 px-4 d-flex"
          style={{ width: "98.7vw", backgroundColor: "#14618F" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to={"/"} style={{  color: "white", textDecoration: "none" }}>
                <img src={logo} alt="" style={{ height: "60px" }} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    to={"/"}
                    style={{fontWeight:"600", color: "white", textDecoration: "none" }}
                  >
                    EVERTHING
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link
                    // to={"/women"}
                    style={{ fontWeight:"600",color: "white", textDecoration: "none" }}
                  >
                    WOMEN
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    // to={"/men"}
                    style={{fontWeight:"600", color: "white", textDecoration: "none" }}
                  >
                    MEN
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    // to={"/accessories"}
                    style={{fontWeight:"600", color: "white", textDecoration: "none" }}
                  >
                    ACCESSORIES
                  </Link>
                </Nav.Link>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Nav.Link>
            {tokenData ? (
              <div onClick={() => handleLogout()} style={{fontWeight:"600", color:"white"}}>Logout</div>
            ) : (
              <Link
                className="d-flex flex-row-reverse p-4"
                to={"/login"}
                style={{ backgroundColor: "#14618F", color: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </Link>
            )}
          </Nav.Link>
          <Nav.Link>
            <Link
              className="d-flex flex-row-reverse p-3"
              to={"/cart"}
              style={{ backgroundColor: "#14618F", color: "white" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Link>
          </Nav.Link>
          <div className="nav-cart-value">
            <span className="text-black" style={{fontSize:"12px"}}>{addCart}</span>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComp;
