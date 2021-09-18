import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.scss";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signInAction } from "../../redux/auth/auth.actions";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../redux/auth/auth.selector";
import { getRoleAction } from "../../redux/role/role.actions";
import { useRole } from "../../redux/role/role.selector";
import { Roles } from "../../shared/roles";

const SignUp: React.FC = () => {
  const history = useHistory();
  const { error, userLogged } = useAuth();
  const [email, setEmail] = useState<string>("");
  const { role } = useRole();
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogged) {
      history.push("/mainpage/artists");
    }
  }, [history, userLogged]);

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

  const signInHanlder = (e: any) => {
    e.preventDefault();

    emailValidation();
    passwordValidation();

    if ((!errorEmail && !errorPassword) &&
      (email &&
      password)
    ) {
    dispatch(signInAction({ email, role, password }));
    setEmail("");
    setPassword("");
    }
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__card}>
        <header className={styles.card__header}>
          <h1>Login</h1>
        </header>
        <div className={styles.card__body}>
          <Form onSubmit={signInHanlder}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="shadow-none"
                value={email}
                onChange={handleEmail}
              />
              <Form.Label className={styles.error}>{errorEmail}</Form.Label>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <select
                onChange={(e: any) => {
                  dispatch(getRoleAction(e.target.value));
                }}
              >
                {Roles.map((role: string) => (
                  <option value={role}>{role}</option>
                ))}
              </select>
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
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
