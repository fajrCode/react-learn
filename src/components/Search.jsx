/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearch = () => {
    props.onSearch(search);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <>
      <div>
        Cari: <input onChange={changeSearch} onKeyDown={onEnter}></input>
        <button onClick={onSearch}>Search</button>
      </div>
      <small>
        Pencarian {props.totalPosts} dari kata {search}
      </small>
    </>
  );
}
