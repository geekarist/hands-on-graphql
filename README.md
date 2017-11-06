# hands-on-graphql
Build your first graphQL runtime step by step !

## Aide
Voici le lien vers la [présentation graphQL](GraphQL_XKE_06112017.pdf), n'hésitez pas à revoir les examples de code si vous êtes bloqués.

## IMPORTANT
- **la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).**
- **Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql`**

## Exercice 1

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

## Exercice 2

### Création d'une ressource dynamique
Pour la suite du hands-on, une base de données in-memory sera utilisée, [lokijs](http://lokijs.org/).
L'initialisation de deux collections est déjà implémentée et les méthodes utiles pour les manipuler sont diponibles sur la [Documentation de lokijs](https://rawgit.com/techfort/LokiJS/master/jsdoc/Collection.html)

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

**Types de la ressource**
 ```
 type Book {
   id : Number
   title : String
   year : Number
 }
 ```

 _NB: Utiliser la collection "books" initialisée dans src/db/index.js_

 _Solution disponible sur la branche solutions/question-2_

## Exercice 3

### Référencer une autre ressource

_checkout la branche question-3_

**But:** Créer un service graphQL qui réponde à ces deux requêtes:
```
// le titre, année, likes et auteur (nom, prénom) du livre d'id 2

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

**Types des ressources**
 ```
 type Book {
   id : Number
   title : String
   year : Number
   author : Author
 }

 type Author {
   id : Number
   firstName : String
   lastName : String
   books : [Book]
   popularity : Number
 }

 ```

 _NB: Utiliser les collection "books" et "authors" initialisées dans src/db/index.js_

 _Solution disponible sur la branche solutions/question-3_

## Exercice 4

### Mutations

_checkout la branche question-4_

**But:** Modifier le service graphQL pour qu'il réponde à ces trois requêtes:
```
// POST - Ajouter un livre en indiquant obligatoirement id, title, author_id et year (Likes automatiquement initialisés à 0 par défaut)

mutation {
  addBook(id : 9, title : "Martine fait du GraphQL", author_id : 1, year : 2017) {
    id,
    likes
  }
}
```
```
// PUT - Incrémenter le nombre de likes d'un livre en indiquant son titre

mutation {
  likeBook(title : "Martine fait du GraphQL") {
    likes
  }
}
```
```
// DELETE - Supprimer un livre en indiquant son id

mutation {
  deleteBook(id : 9) {
    author {
      firstName,
      lastName,
      books {
        title
      }
    }
  }
}
```

_NB: Utiliser les collection "books" et "authors" initialisées dans src/db/index.js_

![Martine](https://img4.hostingpics.net/pics/981922martineGraphQL.jpg)
