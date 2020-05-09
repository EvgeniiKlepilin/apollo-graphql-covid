import { ApolloServer } from 'apollo-server';
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import typeDefs from './api/schema';
import CovidAPI from './api/CovidAPI';
import resolvers from './resolvers/index';
import { CovidDataSources } from './types';

import config from './config/index';

// TODOS:
// Consider adding test coverage
// Look into adding repo badges
// Research more on where can I contribute this project. Ex. Help with Covid seems like an option. -> Create Resource

const dataSources = (): DataSources<CovidDataSources> => ({
  covidAPI: new CovidAPI(config.apiBaseUrl)
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({
  port: config.server.port,
  host: config.server.host
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});