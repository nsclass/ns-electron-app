# ns-electron-app

Electron application with react, typescript and emotion CSS setup

## Steps

-   Create an electron app with electron forge

```
$ yarn create electron-app ns-electron-app --template=webpack
```

-   Install required packages

```
yarn add --dev babel-loader @babel/core @babel/preset-react
yarn add --dev source-map-loader
yarn add --dev babel-plugin-emotion
yarn add --dev @emotion/babel-preset-css-prop
yarn add --dev @types/react @types/react-dom @types/webpack-env
yarn add --dev @babel/plugin-transform-runtime
yarn add --dev typescript @babel/core @babel/cli
yarn add --dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
yarn add --dev @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-numeric-separator

yarn add @babel/runtime
yarn add react react-dom
yarn add @emotion/core
```

-   Modify webpack.rules.js to use babel-loader for type script files

```
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules|.webpack)/,
    use: "babel-loader",
  },
  {
    test: /\.js$/,
    use: ["source-map-loader"],
    enforce: "pre"
  },
```

-   Update webpack.renderer.config.js

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

-   Update package.json for plugins section. js should use App.tsx insteadd of renderer.js

```
"plugins": [
  [
    "@electron-forge/plugin-webpack",
    {
      "mainConfig": "./webpack.main.config.js",
      "renderer": {
        "config": "./webpack.renderer.config.js",
        "entryPoints": [
          {
            "html": "./src/index.html",
            "js": "./src/App.tsx",
            "name": "main_window"
          }
        ]
      }
    }
  ]
]
```

-   Create .babelrc file

```
{
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
      "emotion", ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]],
    "presets": [
              "@babel/env",
              "@babel/typescript"
              "@babel/preset-react",
              "@emotion/babel-preset-css-prop"
              ]
}
```

-   Update index.html

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

-   Create a App.tsx in src directory.

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
        Nam's electron application <strong><span css={css`color: blue`}>template</span></strong>!
      </p>
    </div>
  </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

-   Create tsconfig.json

```
{
    "compilerOptions": {
      /* Basic Options */
      "target": "ES2018" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
      "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
      // "lib": [],                             /* Specify library files to be included in the compilation. */
      // "allowJs": true,                       /* Allow javascript files to be compiled. */
      // "checkJs": true,                       /* Report errors in .js files. */
      "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
      // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
      // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
      // "sourceMap": true,                     /* Generates corresponding '.map' file. */
      // "outFile": "./",                       /* Concatenate and emit output to single file. */
      // "outDir": "./",                        /* Redirect output structure to the directory. */
      // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      // "composite": true,                     /* Enable project compilation */
      // "removeComments": true,                /* Do not emit comments to output. */
      // "noEmit": true,                        /* Do not emit outputs. */
      // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
      // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
      // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

      /* Strict Type-Checking Options */
      "strict": true /* Enable all strict type-checking options. */,
      // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
      // "strictNullChecks": true,              /* Enable strict null checks. */
      // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
      // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
      // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
      // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
      // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

      /* Additional Checks */
      // "noUnusedLocals": true,                /* Report errors on unused locals. */
      // "noUnusedParameters": true,            /* Report errors on unused parameters. */
      // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
      // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

      /* Module Resolution Options */
      // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
      // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
      // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
      // "typeRoots": [],                       /* List of folders to include type definitions from. */
      // "types": [],                           /* Type declaration files to be included in compilation. */
      // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
      "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

      /* Source Map Options */
      // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
      // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
      // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

      /* Experimental Options */
      // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
      // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    }
}
```

-   Update main.js to alllow to access the self signed WEB API

```
app.on(
  "certificate-error",
  (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
  }
);
```

-   Update main.js to disable CORS and allow to use Node featre in a renderer process

```
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });
```

## Babel Typescript loader
https://github.com/microsoft/TypeScript-Babel-Starter