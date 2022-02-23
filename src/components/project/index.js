import React from "react";

// import searchBox and searchResult components
import SearchBox from "../searchBox/index";
import SearchResult from "../searchResult/index";

// import css file
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="a">
        <SearchBox />
        <SearchResult />
      </div>
    </>
  );
};
export default Project;
