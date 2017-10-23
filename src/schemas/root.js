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

const MutationType = new GraphQLObjectType({
  name : "Mutation",
  fields : () => ({
    updateAuthorLastName : {
      type : Author.type,
      args : {
        id : {
          type : new GraphQLNonNull(GraphQLInt),
        },
        lastName : {
          type : new GraphQLNonNull(GraphQLString),
        },
      },
      resolve : (value, {id, lastName}) => {
        return authorClient.updateAuthorLastName(id, lastName);
      }
    }
  }),
});

module.exports = new GraphQLSchema({
  query : QueryType,
  mutation : MutationType
});