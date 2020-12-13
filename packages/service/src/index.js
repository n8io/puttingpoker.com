import { ApolloServer as ApolloServerExpress } from 'apollo-server-express';
import { make as makeStart } from 'start';

/**
 * Keep in-memory cache of app, cache, dbConnection, and schema because
 * serverless functions will reuse them on cold starts
 * */
let lambdaCache = {};

const start = makeStart(ApolloServerExpress);

const main = async () => {
  // eslint-disable-next-line require-atomic-updates
  lambdaCache = await start(lambdaCache);
};

main();
