const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
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

// TODO : définir le type Mutation et les résolveurs pour ses trois attributs, addBook, likeBook, et deleteBook
const MutationType;

// TODO : définir la ressource mutation dans le schéma de l'application
module.exports = new GraphQLSchema({
  query : QueryType
});