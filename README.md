# hands-on-graphql
Build your first graphQL runtime step by step !

## Exercice 3

### Référencer une autre ressource

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
