const {
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

// TODO définir le type Query et le schéma du service gql

const Book = require('./book/Book');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    book: Book
  })
});

module.exports = new GraphQLSchema({
  query: QueryType
});
