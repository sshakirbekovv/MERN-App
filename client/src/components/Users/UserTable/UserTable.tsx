import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../../../redux/users/users.actions";
import { User } from "../../../types/user.types";

const UserTable: React.FC<{
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ user, onEdit, onDelete }) => {

  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <Button variant="primary" onClick={onEdit}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UserTable;
