# ns-electron-app
Electron application with react, typescript and emotion CSS setup


## Steps
-  Create an electron app with electron forge
```
$ yarn create electron-app ns-electron-app --template=webpack
```
- Install required packages
```
yarn add --dev babel-loader @babel/core @babel/preset-react @babel/preset-typescript typescript
yarn add react react-dom

yarn add --dev babel-plugin-emotion
yarn add --dev @emotion/babel-preset-css-prop
yarn add --dev @types/react
yarn add @emotion/core
```
- Modify webpack.rules.js to use babel-loader for type script files
```
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules|.webpack)/,
    use: "babel-loader",
  },   

```
- Update webpack.renderer.config.js
```
module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },  
};
```
- Create .babelrc file
```
{
    "plugins": ["emotion"],
    "presets": ["@babel/preset-react", "@babel/preset-typescript", "@emotion/babel-preset-css-prop"],
}
```

- Update index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```

- Create a App.tsx in src directory.
```
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
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```
