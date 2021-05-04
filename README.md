# react-16x-starter

[![CircleCI](https://circleci.com/gh/demonmhon/react-16x-starter/tree/master.svg?style=svg)](https://circleci.com/gh/demonmhon/react-16x-starter/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0d79bf0a50031716bdcc/maintainability)](https://codeclimate.com/github/demonmhon/react-16x-starter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0d79bf0a50031716bdcc/test_coverage)](https://codeclimate.com/github/demonmhon/react-16x-starter/test_coverage)

The react 16x starter. Also Docker setup for production build.

## Getting started

For development, set your environment variables in `.env.development`, update all variables with correct values

```bash
$ cp .env.example .env.development
```

> `.env.development` is for local development, it ignored by git.

Install dependencies

```bash
$ npm install
```

The start the development server (webpack) with

```bash
$ npm start:dev
```


## Scripts

| Script | Description |
|-|-|
| `start` | Serve the built app fron `dist`, (must build first) |
| `start:docker` | Start the app with docker (required `build:docker` first) |
| `start:dev` | Start the app with `development` mode, `webpack-dev-server` and hot module replacement (HMR) enabled |
| `test` | Jest and execute all the tests |
| `test:coverage` | Generate a coverage report |
| `test:watch` | Run all the tests and keep on watch mode |
| `build` | Build the production build |
| `build:docker` | Build docker image |
| `analyze` | Run `webpack-bundle-analyzer` to visualize size of webpack output files |


## Resources

For starter components. Find out more on [react-16x-starter-components](https://github.com/demonmhon/react-16x-starter-components).

 * [Feather Icons](https://github.com/feathericons/feather)


## License

[MIT](LICENSE.md)
