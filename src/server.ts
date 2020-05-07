import apollo = require('apollo-server');
import typeDefs from './api';

const { ApolloServer } = apollo;

const server = new ApolloServer({ typeDefs });

// TODO: continue with the tutorial https://www.apollographql.com/docs/tutorial/data-source/

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});