const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const {getAuthorById, getAuthorByLastName} = require("./author.client");
const {getBooksByAuthor} = require("../book/book.client");
const {type : BookType} = require("../book/Book");

const AuthorArgs = {
  id : {
    name : "Author id",
    type : GraphQLInt,
  },
  lastName : {
    name : "Author lastName",
    type : GraphQLString,
  }
};

const AuthorType = new GraphQLObjectType({
  name : "Author",
  fields : () => ({
    id : {
      type : GraphQLInt,
      resolve : (root) => {
        return root.id;
      },
    },
    firstName : {
      type : GraphQLString,
      resolve : (root) => {
        return root.firstName;
      },
    },
    lastName : {
      type : GraphQLString,
    },
    books : {
      type : new GraphQLList(BookType),
      resolve : (author) => {
        return getBooksByAuthor(author.id);
      },
    },
    popularity : {
      type : GraphQLInt,
      resolve : (author, args) => {
      }
    },
  }),
});

module.exports = {
  type : AuthorType,
  args : AuthorArgs,
  resolve : (root, args, context) => {
    if (args.id) {
      return getAuthorById(args.id);
    }
    return getAuthorByLastName(args.lastName)
  },
};

