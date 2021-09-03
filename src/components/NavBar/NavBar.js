import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import GlobalContext from "../../context/GlobalContext";


const NavBar = () => {
  const { handleTheme, theme } = useContext(GlobalContext);
  
  return (
    <header>
      <div className={"NavBar NavBar-" + theme + " mobileOff"}>
        <NavLink to={"/"} className={"NavLink NavLink-" + theme} activeClassName={"off"}>
          Inicio
        </NavLink>
        <NavLink to={"/link1"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>
          Link1
        </NavLink>
        <NavLink to={"/link2"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>
          Link2
        </NavLink>
        <NavLink to={"/link3"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>
          Link3
        </NavLink>
        <NavLink to={"/link4"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>
          Link4
        </NavLink>
        <span className={"NavLink-Purple"} onClick={() => handleTheme("Purple")}>Purple theme</span>
        <span className={"NavLink-Light"} onClick={() => handleTheme("Light")}>Light theme</span>
        <span className={"NavLink-Dark"} onClick={() => handleTheme("Dark")}>Dark theme</span>
      </div>
      <header className={"NavBar NavBar-" + theme + " mobileOn"}>
      <NavLink to={"/"} className={"NavLink NavLink-" + theme} activeClassName={"off"}>
          Inicio
        </NavLink>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          三
        </Dropdown.Toggle>
        <Dropdown.Menu className={"DropDown-" + theme}>
          <Dropdown.Item><NavLink to={"/link1"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>Link1</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to={"/link2"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>Link2</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to={"/link3"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>Link3</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to={"/link4"} activeClassName={"off"} className={"NavLink NavLink-" + theme}>Link4</NavLink></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><span className={"NavLink-Purple"} onClick={() => handleTheme("Purple")}>Purple theme</span></Dropdown.Item>
          <Dropdown.Item><span className={"NavLink-Light"} onClick={() => handleTheme("Light")}>Light theme</span></Dropdown.Item>
          <Dropdown.Item><span className={"NavLink-Dark"} onClick={() => handleTheme("Dark")}>Dark theme</span></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </header>
    </header>
  );
};

export default NavBar;
