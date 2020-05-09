import dotenv = require('dotenv');

dotenv.config();

export default {
  apiBaseUrl: process.env.COVID_API_URL + '/' + process.env.COVID_API_VERSION + '/',
  server: {
    port: process.env.APOLLO_PORT,
    host: process.env.APOLLO_HOST
  }
}