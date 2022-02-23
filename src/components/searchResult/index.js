import React from "react";
import { useSelector } from "react-redux";

// import css file
import "./searchResult.css";

const SearchResult = () => {
  // use (useSelector) to use state in reducer
  const state = useSelector((state) => {
    return {
      result: state.getResult.getResult,
    };
  });

  return (
    <>
      <div className="results">
        {state.result.map((result, i) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div
              className="result"
              key={i}
              onClick={(e) => {
                window.open(`${url}`, "_newtab");
              }}
            >
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
              <a href={url} target="_blank" rel="noreferrer">
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
