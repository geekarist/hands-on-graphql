const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

// TODO définir les arguments de la ressource Book
const BookArgs = {
  id: {
    name: 'Book id',
    type: new GraphQLNonNull(GraphQLInt)
  }
};

// TODO définir le type Book, ses attributs et resolveurs
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: (book) => {
        return book.title;
      }
    },
    year: {
      type: GraphQLInt,
      resolve: (book) => {
        return book.year;
      }
    }
  })
});

const bookdb = require('./book.client');

const BookResource = {
  type : BookType,
  args : BookArgs,
  resolve : (_, args) => {
    return bookdb.findBookById(args.id);
  },
};

module.exports = BookResource;
