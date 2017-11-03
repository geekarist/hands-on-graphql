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
const bookClient = require("./book/book.client");

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
    addBook : {
      type : Book.type,
      args : {
        id : {
          type : new GraphQLNonNull(GraphQLInt),
        },
        title : {
          type : new GraphQLNonNull(GraphQLString),
        },
        author_id : {
          type : new GraphQLNonNull(GraphQLInt),
        },
        year : {
          type : new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve : (value, {id, title, author_id, year}) => {
        return bookClient.addBook(id, title, author_id, year);
      }
    },
    likeBook : {
      type : Book.type,
      args : {
        title : {
          type : new GraphQLNonNull(GraphQLString),
        },
      },
      resolve : (value, {title}) => {
        return bookClient.likeBook(title);
      }
    },
    deleteBook : {
      type : Book.type,
      args : {
        id : {
          type : new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve : (value, {id}) => {
        return bookClient.deleteBook(id);
         
      }
    },
  }),
});

module.exports = new GraphQLSchema({
  query : QueryType,
  mutation : MutationType
});