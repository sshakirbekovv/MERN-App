import React from "react";
import { Link } from "react-router-dom";
import { FooterItems } from "./FooterItems/FooterItems";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
        <ul>
         {
           FooterItems.map((item: any, i: number) =>
            <li key={i}>
              <Link to="">
                {item.title}
              </Link>
            </li>
          )
         }
        </ul>
    </footer>
  );
};

export default Footer;