const express = require('express');
const graphqlHTTP = require('express-graphql');

const applicationSchema = require("./src/schemas/root");

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: applicationSchema,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at localhost:4000/graphql');