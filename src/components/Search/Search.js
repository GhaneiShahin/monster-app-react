import React, { useState, Fragment } from "react";
import CardList from "../CardList/CardList";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const filtredMonsters = props.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Fragment>
      <input
      className="search"
        type="search"
        placeholder="search monsters"
        onChange={(e) => setSearch(e.target.value)}
      />
      <CardList monsters={filtredMonsters} />
    </Fragment>
  );
};

export default Search;
