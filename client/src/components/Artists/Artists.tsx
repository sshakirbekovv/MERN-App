import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/UseQuery/UseQuery";
import { getArtistAction } from "../../redux/artists/artists.actions";
import { useArtist } from "../../redux/artists/artists.selector";
import { AllArtists } from "../../types/artists.types";
import SearchBar from "../SearchBar/SearchBar";
import Artist from "./ArtistCard/ArtistCard";
import styles from "./Artists.module.scss";

const Artists: React.FC = () => {
  const { loading, artists } = useArtist();
  const history = useHistory();
  const query = useQuery();
  const queryTerm = query.get("query");
  const [result, setResult] = useState<string>("");
  const [term, setTerm] = useState<string>(queryTerm || "");
  const dispatch = useDispatch();

  const getSearchedArtist = useCallback(() => {
    dispatch(getArtistAction(term.toUpperCase()));
    setResult(term);
  }, [dispatch, term]);

  const getSearchedArtistHandler = (event: any) => {
    event.preventDefault();
    getSearchedArtist();
    history.push({
      pathname: `/mainpage/artists`,
      search: `query=${term.replace(/ /g, "+")}`,
    });
  };

  useEffect(() => {
    getSearchedArtist();
  }, []);

  console.log(artists);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      getSearchedArtistHandler(event);
    }
  };

  return (
    <section className={styles.artists}>
      <div style={{paddingTop: '1rem'}}>
      <SearchBar
        onSubmit={getSearchedArtistHandler}
        value={term}
        setState={setTerm}
        pressEnter={handleKeyDown}
      />
      </div>
      <header className={styles.artists__header}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div>
            {result ? (
              <span>
                {artists?.resultCount} results for "{result}"
              </span>
            ) : (
              <span>Search Albums by ArtistName:</span>
            )}
          </div>
        )}
      </header>
      <div className={styles.artists__cards}>
      {artists && artists.results?.map((artist: AllArtists, i: number) => (
          <Artist key={i} artist={artist} />
        ))} 
      </div>
    </section>
  );
};

export default Artists;
