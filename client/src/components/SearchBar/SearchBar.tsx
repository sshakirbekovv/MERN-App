import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onSubmit: any;
  value: string;
  setState?: any;
  pressEnter: any;
  onKeyDown?: any;
};

const SearchBar: React.FC<Props> = ({ value, onSubmit, setState, pressEnter, onKeyDown }) => { 

  return (
    <form className="search" onSubmit={onSubmit}>
      <fieldset className="fieldset">
        <input 
          type="text"
          className="search__input" 
          required
          value={value}
          onChange={(e: any) => setState(e.target.value)}
          placeholder="Search..."
        />
        <button className="search__button" type="submit" onKeyDown={pressEnter}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </fieldset>
    </form>
  );
}

export default SearchBar;