const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

// TODO définir les arguments de la ressource Book
const BookArgs;

// TODO définir le type Book, ses attributs et resolveurs
const BookType;

const BookResource ={
  type : BookType,
  args : BookArgs,
  resolve : (_, args) => {
    //TODO récupérer la bonne donnée pour les resolveurs du type Book
  },
};

module.exports = BookResource;

