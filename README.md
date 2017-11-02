# hands-on-graphql
Build your first graphQL runtime step by step !

## Idées (Obvious or not) : 
  - Juste avant le hands-on, et après la présentation, montrer rapidement comment requeter le serveur et montrer que ça se fait avec une simple requête HTTP
  - Se renseigner sur la migration REST -> GraphQL, et parler de sa faisabilité, des caveats etc...

## TODO
 - faire les dernières questions: cas plus complexe ? --> à minima des mutations
 - cleaner ce README
 - refaire une passe sur les README de toutes les branches pour qu'ils soient les mêmes
 - dernière diapo sur la prez pour donner le lien à ce repo
 - maybe forker ce repo sur le compte de xebia ? (c'est sur mon compte)

## Exercice

### IMPORTANT
- **la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).**
- **Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql`**

### 1.Création d'une ressource simple
_Checkout la branche question-1._

**But**: Créer un service graphQL qui répondra à la requête suivante:
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

**Etapes:**
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

_Solution disponible sur la branche solutions/question-1_

### 2.Création d'une ressource dynamique
Pour la suite du hands-on, une base de données in-memory sera utilisée, [lokijs](http://lokijs.org/).
L'initialisation de deux collections est déjà implémentée et les méthodes utiles pour les manipuler sont diponibles sur la [Documentation de lokijs](https://rawgit.com/techfort/LokiJS/master/jsdoc/Collection.html)

_Checkout la branche question-2_

**But:** Créer un service graphQL qui puisse répondre à cette requête:
```
query {
  book(id : 2) {
    title
    year
  }
}
```
Cette requête devra renvoyer le titre et année de parution du livre dont l'id est 2.

_NB: Utiliser la collection "books" initialisée dans src/db/index.js_

### 3. Référencer une autre ressource

_checkout la branche question-3_

**But:** Créer un service graphQL qui réponde à ces deux requêtes:
```
// le titre, année et autheur (nom, prénom) du livre d'id 2

query {
  book(id : 2) {
    title
    year
    likes
    author {
      firstName
      lastName
    }
  }
}
```
```
// nom et prénom de l'auteur d'id 1, ainsi que ses livres (titre et année)
// la popularité sera la somme des likes de tous les livres de l'auteur
query {
  author(id : 1) {
    firstName
    lastName
    books {
      title
      year
    }
    popularity
  }
}
```

_NB: Utiliser les collection "books" et "authors" initialisées dans src/db/index.js_

## Cheat sheet

![GraphQL Cheat Sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)