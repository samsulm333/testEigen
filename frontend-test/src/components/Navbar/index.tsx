import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  return (
    <Navbar className={styles.navbarWrapper}>
      <NavbarBrand>
        <h1 className={styles.navbarText}>News Portal</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default NavbarComponent;
