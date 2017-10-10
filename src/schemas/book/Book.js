const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const {getBookById} = require("./book.client");

const BookArgs = {
  id : {
    name : "Book id",
    type : new GraphQLNonNull(GraphQLInt),
  }
};

const BookType = new GraphQLObjectType({
  name : "Book",
  fields : () => {
    const Author = require("../author/Author");
    return {
      id : {type : GraphQLInt},
      title : {type : GraphQLString},
      year : {type : GraphQLInt},
      likes : {type : GraphQLInt},
      author : {
        type : Author.type,
        resolve : (book, args, context) => {
          return Author.resolve(null, {id : book.author_id});
        },
      },
    };
  },
});

module.exports = {
  type : BookType,
  args : BookArgs,
  resolve : (_, args) => {
    return getBookById(args.id);
  },
};

