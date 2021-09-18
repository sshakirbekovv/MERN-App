import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Users.module.scss";
import { useUsers } from "../../redux/users/users.selector";
import { UserItems } from "./UserItems/UserItems";
import UserTable from "./UserTable/UserTable";
import { creaeteUserAction, deleteUserAction, getUsersAction, updateUserAction } from "../../redux/users/users.actions";
import { Button } from "react-bootstrap";
import ModalForm from "../ModalForm/ModalForm";
import { getUser } from "../../api/users.api";

const Users: React.FC = () => {


  const [editId, setEditId] = useState<string>("");
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const { users } = useUsers();
  const dispatch = useDispatch();
  const roleToken = localStorage.getItem("role");
  const showHideClassName = openModal ? "display-block" : "display-none";
  const closeModal = openModal ? 'overlay-block' : 'overlay-none';

  useEffect(() => {
    if (roleToken === "Admin") {
      dispatch(getUsersAction());
    }
  }, [dispatch, roleToken]);

  const createUserHandler = (e: any) => {
    e.preventDefault();
    dispatch(creaeteUserAction({ name, email, role, password }));
    setOpenModal(false);
  }

  const updateUserHandler = (e: any, id: string) => {
    e.preventDefault();
    dispatch(updateUserAction({ name, email, role, password }, id));
    setOpenModal(false);
  }

  const modalActiveCreate = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
    setModalCreate(true);
    setName("");
  };

  const modalActiveEdit = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
    setModalCreate(false);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const deleteUserHandler = (id: string) => {
    dispatch(deleteUserAction(id));
  };

  return (
    <div className={styles.users}>
      <div className={closeModal} onClick={modalClose}></div>
       <div className={showHideClassName}>
          <ModalForm 
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          role={role}
          setRole={setRole}
          onClick={(e: any) => {modalCreate ? createUserHandler(e) : updateUserHandler(e, editId)}}
          text={modalCreate ? "Save" : "Edit"}
          display={modalCreate ? "block" : "none"}
          />
        </div>
      <header className={styles.users__header}>
        <Button 
        variant="success"
        onClick={modalActiveCreate}
        > Create a new user
        </Button>
      </header>
      <div className={styles.users__table}>
        <table>
          <thead>
            <tr>
              {UserItems.map((item) => (
                <th>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <UserTable 
                user={item} 
                onEdit={() => {
                  modalActiveEdit(); 
                  setEditId(item._id!);
                  setName(item.name);
                  setRole(item.role);
                }}
                onDelete={() => deleteUserHandler(item._id!)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
