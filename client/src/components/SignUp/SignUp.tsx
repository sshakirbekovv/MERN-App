import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.scss";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../redux/auth/auth.actions";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../redux/auth/auth.selector";
import { getRoleAction } from "../../redux/role/role.actions";
import { useRole } from "../../redux/role/role.selector";
import { Roles } from "../../shared/roles";

const SignUp: React.FC = () => {
  const history = useHistory();
  const { error, userLogged } = useAuth();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { role } = useRole();
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const [errorName, setErrorName] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");

  useEffect(() => {
    if (userLogged) {
      history.push("/mainpage/artists");
    }
  }, [history, userLogged]);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value) {
      setErrorName("");
    }
  };

  const nameValidation = () => {
    if (name.length <= 6) {
      setErrorName("Name length must be more than 6 letters!");
      if (!name) {
        setErrorName("Name can`t be empty!");
      }
    } else {
      setErrorName("");
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setErrorEmail("");
    }
  };

  const emailValidation = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Invalid email!");
      if (!email) {
        setErrorEmail("E-mail can`t be empty!");
      }
    } else {
      setErrorEmail("");
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setErrorPassword("");
    }
  };

  const passwordValidation = () => {
    if (password.length <= 6) {
      setErrorPassword("Password length must be more than 6 letters!");
      if (!password) {
        setErrorPassword("Password can`t be empty!");
      }
    } else {
      setErrorPassword("");
    }
  };

  const signUpHanlder = (e: any) => {
    e.preventDefault();

    nameValidation();
    emailValidation();
    passwordValidation();

    if (
      (!errorEmail || !errorName || !errorPassword) &&
      email &&
      name &&
      password
    ) {
      dispatch(signUpAction({ name, email, role, password }));
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__card}>
        <header className={styles.card__header}>
          <h1>Welcome!</h1>
        </header>
        <div className={styles.card__body}>
          <Form onSubmit={signUpHanlder}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="shadow-none"
                value={name}
                onChange={handleName}
              />
              <Form.Label className={styles.error}>{errorName}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="shadow-none"
                value={email}
                onChange={handleEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <br />
              <Form.Label className={styles.error}>{errorEmail}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <select
                onChange={(e: any) => dispatch(getRoleAction(e.target.value))}
              >
                {Roles.map((role: string) => (
                  <option value={role}>{role}</option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="shadow-none"
                value={password}
                onChange={handlePassword}
              />
              <Form.Label className={styles.error}>{errorPassword}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me!" />
            </Form.Group>
            <div className={styles.error}>{error}</div>
            <Button
              variant="primary"
              type="submit"
              className="shadow-none"
              onClick={() => localStorage.setItem("role", role)}
            >
              Sign Up
            </Button>
          </Form>
        </div>
        <footer className={styles.card__footer}>
          <Link to="/">Forgot password?</Link>
          <Link to="/signin">Sign in</Link>
        </footer>
      </div>
    </section>
  );
};

export default SignUp;
