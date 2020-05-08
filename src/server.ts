import { ApolloServer } from 'apollo-server';
import typeDefs from './api/schema';
import CovidAPI from './api/CovidAPI';
import resolvers from './resolvers/index';

import config from './config/index';

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