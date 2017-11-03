# hands-on-graphql
Build your first graphQL runtime step by step !

## Exercice 1

### IMPORTANT
- **la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).**
- **Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql`**

### Création d'une ressource simple
_Checkout la branche master du projet pour cette première question._

But: Créer un service graphQL qui répondra à la requête suivante:
```
query {
  user {
    id
    name
  }
}
```
et qui donnera la réponse suivante (statique):
```
{
 data : {
   user : {
     id : 1,
     name : "Toto",
   }
 }
}
```
**Type de la ressource**
```
  type User {
    id : Number
    name : String
  }
```

Etapes:
1. Créer le schéma graphql à l'aide de la méthode [GraphQLSchema](http://graphql.org/graphql-js/type/#graphqlschema)
2. Créer la ressource principale pour les requêtes "GET": Query
3. Créer la ressource User

Rappel: pour cette question les resolveurs retourneront une valeur en dur dans le code.

_Solution disponible sur la branche solutions/question-1_
