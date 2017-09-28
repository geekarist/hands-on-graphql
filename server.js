const express = require('express');
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');

const Person = require("./src/schemas/person/Person");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  ${Person.type}
  
  type Query {
    hello(who : String): String
    person : Person
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello : function({who}) {
    return `Hello world! ${who}`;
  },
  person : Person.resolve(),
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');