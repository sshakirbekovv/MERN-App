import React from "react";
import { Form, Button } from "react-bootstrap";
import { Roles } from "../../shared/roles";

type Props = {
  name: string;
  setName: any;
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  role: string;
  setRole: any;
  onClick: any;
  text: string;
  display: string;
};

const ModalForm: React.FC<Props> = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
  onClick,
  text,
  display
}) => {

  return (
    <Form onSubmit={onClick} className="form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          className="shadow-none"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: display }}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="shadow-none"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <select onChange={(e: any) => setRole(e.target.value)}>
          {Roles.map((role: string, i: number) => (
            <option key={i} value={role}>{role}</option>
          ))}
        </select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{ display: display }}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className="shadow-none"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="shadow-none"
      >
        {text}
      </Button>
    </Form>
  );
};

export default ModalForm;
