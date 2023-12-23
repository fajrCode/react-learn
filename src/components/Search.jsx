/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };
  return (
    <>
      <div>
        Cari: <input onChange={changeSearch}></input>
      </div>
      <small>Pencarian 0 dari kata {search}</small>
    </>
  );
}
