const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name : "User",
  fields : () => ({
    id : {
      type : GraphQLInt,
      resolve : () => 1,
    },
    name : {
      type : GraphQLString,
      resolve : () => "Toto",
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name : "Query",
  fields : () => ({
    user : {
      type : UserType,
      resolve : () => "", // pour cet exemple totalement statique, on a juste besoin de retourner quelque chose de non null
    },
  }),
});


const rootSchema = new GraphQLSchema({
  query : QueryType,
});

module.exports = rootSchema;