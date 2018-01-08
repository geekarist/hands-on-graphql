const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

// TODO 3. : définir le type User et les resolveurs pour ses attributs
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: () => 1
    },
    name: {
      type: GraphQLString,
      resolve: () => "toto"
    }
  })
});

// TODO 2. : définir le type Query et les résolveurs pour ses attributs
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      resolve: () => ""
    },
  })
});


// TODO 1. : définir le schéma de l'application (contient uniquement les deux ressources query et mutation)
const rootSchema = new GraphQLSchema({
  query: QueryType
});

module.exports = rootSchema;
