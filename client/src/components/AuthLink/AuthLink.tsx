import React from "react";
import styles from "./AuthLink.module.scss";
import { Link } from "react-router-dom";

const AuthLink: React.FC<{ children: any; to: string; }> = ({
  children,
  to,
}) => {
  return (
    <Link to={to} className={styles.authLink}>
      {children}
    </Link>
  );
};

export default AuthLink;
