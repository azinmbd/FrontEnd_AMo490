import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import wlogo from "../assets/wlogo.svg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useDispatch, useSelector } from "react-redux";
// import { deleteToken } from "../redux/features/authSlice";

const NoAuthHeader = () => {
  const dispatch = useDispatch();
  // const refreshToken = useSelector((state) => state.auth.refreshToken);
  // const user = useSelector((state) => state.auth.user);
  useEffect(() => {}, [dispatch]);

  const openNav = () => {
    document.getElementById("Sidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("Sidenav").style.width = "0";
  };
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "WHITE",
          zIndex: "10000",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
        className="d-block-lg"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink className="nav-item logo" to="/">
              <img src={logo} alt="" height={"100%"} />
            </NavLink>
            <div className="d-flex  w-70">
              <NavLink
                className="nav-item"
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Home
              </NavLink>
              <NavLink
                className="nav-item"
                to="/recipes"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Recipes
              </NavLink>

              <NavLink
                className="nav-item"
                to="/aboutus"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                About Us
              </NavLink>
              <NavLink
                className="nav-item askAIiTN"
                style={{ color: "#539165", backgroundColor: "#fff2d7" }}
                to="/askai"
              >
                Ask AI
              </NavLink>
            </div>

            <NavLink className="nav-item siginBtn" to="/signup">
              SignUp
            </NavLink>
            <NavLink
              className="nav-item siginBtn"
              to="/signIn"
              style={{ backgroundColor: "#FD6D0D" }}
            >
              SignIn
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className="mobile-menu d-flex-sm ">
        <div id="Sidenav" className="sidenav">
          <a href="" className="closebtn" onClick={() => closeNav()}>
            &times;
          </a>
          <div className="d-flex justify-c">
            <img src={wlogo} width="150px" alt="" />
          </div>
          <NavLink
            className="nav-item"
            to="/"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item"
            to="/recipes"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Recipes
          </NavLink>
          <NavLink
            className="nav-item"
            to="/aboutus"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => closeNav()}
            className="nav-item askAIiTN"
            style={{ color: "#539165" }}
            to="/askai"
          >
            Ask AI
          </NavLink>
          <NavLink
            className="nav-item"
            to="/signin"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            SignIn
          </NavLink>
          <NavLink
            className="nav-item"
            to="/signup"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            SignUp
          </NavLink>
        </div>{" "}
        <span onClick={() => openNav()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#539165"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>{" "}
        <NavLink className="nav-item logo" to="/">
          <img src={logo} alt="" height={"100%"} />
        </NavLink>
      </nav>
    </React.Fragment>
  );
};
export default NoAuthHeader;
