const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const Author = require("./author/Author");
const Book = require("./book/Book");
const authorClient = require("./author/author.client");

const QueryType = new GraphQLObjectType({
  name : "Query",
  fields : () => ({
    author : Author,
    book : Book,
    allAuthors : {
      type : new GraphQLList(Author.type),
      resolve : () => authorClient.getAllAuthors(),
    }
  }),
});

module.exports = new GraphQLSchema({
  query : QueryType,
});