# hands-on-graphql
Build your first graphQL runtime step by step !

## Idées (Obvious or not) : 
  - Juste avant le hands-on, et après la présentation, montrer rapidement comment requeter le serveur et montrer que ça se fait avec une simple requête HTTP
  - Se renseigner sur la migration REST -> GraphQL, et parler de sa faisabilité, des caveats etc...

## TODO
 3. Création exercice depuis la solution:
    - faire des examples de mutation (post, put, delete)
    - décider des différentes étapes
    - création des fichiers de tests pour qu'ils fassent l'exo en TDD ?

## Exercice

**IMPORTANT:**
- la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).
- Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql` 

### 1.Création d'une ressource simple
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

Etapes:
1. Créer le schéma graphql à l'aide de la méthode [GraphQLSchema](http://graphql.org/graphql-js/type/#graphqlschema)
2. Créer la ressource principale pour les requêtes "GET": Query
3. Créer la ressource User:
```
type User {
  id : Number
  name : String
}
```
Rappel: pour cette question les resolveurs retourneront une valeur en dur dans le code.


## Cheat sheet

![GraphQL Cheat Sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)