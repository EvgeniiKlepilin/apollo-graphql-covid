import { ApolloServer } from 'apollo-server';
import typeDefs from './api/schema';
import CovidAPI from './api/CovidAPI';
import resolvers from './resolvers/index';

import config from './config/index';

// TODOS:
// Add default arguments to queries, ex. format = json
// Add copy to clipboard button to code segments for readme
// Add PORT to env and configure server setup accordingly
// Upload this to GitHub
// Add good quality readme
// Consider adding test coverage
// Look into adding repo badges
// Research more on where can I contribute this project. Ex. Help with Covid seems like an option. -> Create Resource

const dataSources = () => ({
  covidAPI: new CovidAPI(config.apiBaseUrl)
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});