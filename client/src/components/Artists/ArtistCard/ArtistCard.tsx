import React from "react";
import { AllArtists } from "../../../types/artists.types";
import styles from "./ArtistCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faShoppingCart,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Artist: React.FC<{ artist: AllArtists }> = ({ artist }) => {
  return (
    <div className={styles.card}>
      <a href={artist.collectionViewUrl} target="_blank" rel="noopener noreferrer">
        <header className={styles.card__header}>
          <div
            className={styles.header__logo}
            style={{ backgroundImage: `url(${artist.artworkUrl100})` }}
          ></div>
          <div className={styles.header__info}>
            <span>{artist.artistName}</span>
            <span>
              Price: {artist.collectionPrice} {artist.currency}
            </span>
          </div>
        </header>
        <div className={styles.card__body}>
          <ul className={styles.card__body_list}>
            <li>
              <div style={{ width: "1.5rem" }}>
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <span>{artist.collectionName}</span>
            </li>
            <li>
              <div style={{ width: "1.5rem" }}>
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <span>{artist.country}</span>
            </li>
            <li>
              <div style={{ width: "1.5rem" }}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <div className={styles.buy_button}>
                Buy on the official website
              </div>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Artist;
