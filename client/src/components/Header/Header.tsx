import React from "react";
import styles from "./Header.module.scss";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { HeaderItems } from "./HeaderItems/HeaderItems";
import Cookies from "ts-cookies";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../redux/auth/auth.actions";

const Header: React.FC = () => {
  
  const roleToken = localStorage.getItem("role");
  const AuthToken = Cookies.get("token");
  let location = useLocation().pathname;
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <Container fluid>
        <nav className={styles.header__nav}>
          <div className={styles.nav__logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={styles.nav__list}>
            {HeaderItems.map((item: any, i: number) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className={
                    location.indexOf(item.link) === 0 ? styles.active : ""
                  }
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {roleToken === "Admin" ? (
              <li>
                <Link
                  to="/mainpage/users"
                  className={
                    location.indexOf("/mainpage/users") === 0
                      ? styles.active
                      : ""
                  }
                >
                  Users
                </Link>
              </li>
            ) : null}
          </ul>
          <div className={styles.nav__link}>
            {AuthToken ? (
              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("role");
                  Cookies.remove("token");
                  Cookies.remove("id_token");
                  dispatch(signOutAction());
                }}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
                    fill="white"
                  ></path>
                </svg>
                &nbsp;&nbsp; Sign out
              </Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
