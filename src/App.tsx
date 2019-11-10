import React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/core";

const App = () => {
  return (
    <section className="section">
    <div className="container">
      <h1 className="title">
        <span css={css`color: red`}>Hello</span> World
      </h1>
      <p className="subtitle">
        Nam's electron application <strong><span css={css`color: blue`}>template</span></strong>!
      </p>
    </div>
  </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
