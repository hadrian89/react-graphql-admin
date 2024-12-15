# react-graphql-admin

React 18 Boilerplate with React 18, Webpack 6, Bootstrap 5, HMR, using babel, Jest unit testing, sass, with a hot dev server and an optimized production build

## Last Changes (the newest first):

- added full support for unit testing (with file mocks) using Jest
- added SVGR as a webpack loader to import your SVG directly as a React Component.
- added build-staging script. same as build but using .env.staging
- added dotenv-webpack to handle process.env.VARS
- added Prettier
- added react-refresh-webpack-plugin for HMR

## Installation

```
git clone git@github.com:hadrian89/react-graphql-admin.git
cd react-graphql-admin
yarn / npm i
```

To use it for your own project the easiest way is to use the green Template Button on top right of this repo on Github.

## Usage

### Development server

```bash
yarn start / npm start
```

You can view the development server at `localhost:3000`.
(change port in ./config/webpack.dev.js)

### Unit Test

```bash
 yarn test / npm test
```

### Production build

```bash
 yarn build / npm run build
```

## Features

- [React 18](https://reactjs.org/)
- [Webpack 6](https://webpack.js.org/)
- [Bootstrap 5](https://bootstrap.com)
- [Graphql](https://graphql.com)
- [Mongodb](https://mongodb.com)
- [Jest 27](http://jestjs.io/)
- [PostCss](https://postcss.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Eslint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky) ( tks [@rubinj30](https://github.com/rubinj30) )

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
