const {
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const Book = require("./book/Book");

const QueryType = new GraphQLObjectType({
  name : "Query",
  fields : () => ({
    book : Book,
  }),
});

module.exports = new GraphQLSchema({
  query : QueryType,
});