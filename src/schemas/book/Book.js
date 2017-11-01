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
  fields : () => ({
    title : {
      type : GraphQLString,
      resolve(book){
        return book.title;
      }
    },
    year : {type : GraphQLInt}, // resolve non spécifié équivaut à l'écriture du dessus (book.year)
  }),
});

module.exports = {
  type : BookType,
  args : BookArgs,
  resolve : (_, args) => {
    return getBookById(args.id);
  },
};

