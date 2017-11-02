const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");

// TODO créer la ressource Book et référencer Author
// aide: pour ne pas avoir de dépendance cyclique dans la méthode fields, importer la ressource à l'intérieur d'une fonction anonyme
// ex:
//    fields : () => {
//      const MyResource = require("./myResource.js");
//      return {
//        ...
//      };
//    },

module.exports = {};

