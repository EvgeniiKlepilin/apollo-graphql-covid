# apollo-graphql-covid

TODO: Add description

## Local setup

Clone the project and locate to the folder of the project.

```bash
git clone https://github.com/EvgeniiKlepilin/apollo-graphql-covid.git && cd apollo-graphql-covid
```

### Installation

Install all of the NPM modules:

```bash
npm install
```

### Launch

Finally, start up the server:

```bash
npm run watch:dev
```

Once the command finishes execution, you should see that your server is available at http://localhost:4000/graphql. You should be able to see GraphiQL interface to interact with the API.


## Available NPM Scripts

```json
{
  ...
  "scripts": {
    "server": "node built/server.js",
    "test": "jest",
    "tsc": "tsc",
    "clean": "rimraf build",
    "build": "npm-run-all clean tsc",
    "lint": "eslint . --ext .ts",
    "dev": "NODE_ENV=development npm-run-all build server",
    "prod": "NODE_ENV=production npm-run-all build server",
    "watch:dev": "nodemon -e ts,js"
  },
  ...
}
```

- "server": Run transpiled server file
- "test": Run jest for available tests
- "tsc": Transpile TS code into TS. `tsconfig.json` specifies provided configuration
- "clean": Remove `build` folder and all its contents using `rimraf`
- "build": Run "clean" and "tsc"
- "lint": Lint the code using `eslint`
- "dev": Run "build" and "server" with `NODE_ENV` set to `development`
- "prod": Run "build" and "server" with `NODE_ENV` set to `production`
- "watch:dev": Start `nodemon` with specified extensions (`ts,js`)