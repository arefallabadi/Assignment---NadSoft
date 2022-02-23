import React from "react";
import { useDispatch } from "react-redux";

// import function to edit state value in reducer
import { deleteResult, setResult } from "../../reducers/result";

// import css file
import "./searchBox.css";

const SearchBox = () => {
  let search;
  const dispatch = useDispatch();

  // handle function to get and edit state
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") {
      dispatch(deleteResult());
      return;
    }

    const endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&
    prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch= ${search}`;

    const response = await fetch(endPoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    dispatch(setResult(json.query.search));
  };

  return (
    <>
      <header>
        <h1>Click here for a random article</h1>
        <form className="search-box">
          <input
            placeholder="Search"
            type="search"
            value={search}
            onChange={(e) => {
              search = e.target.value;
              handleSearch(e);
            }}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBox;
