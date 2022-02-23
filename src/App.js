import React from "react";
import { Route } from "react-router-dom";
import project from "./components/project/index";

const App = () => {
  return (
    <>
      <Route exact path="/" component={project} />
    </>
  );
};

export default App;
