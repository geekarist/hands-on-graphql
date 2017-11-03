# hands-on-graphql
Build your first graphQL runtime step by step !

## Exercice 4

### IMPORTANT
- **la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).**
- **Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql`**

### Mutations

_checkout la branche question-4_

**But:** Modifier le service graphQL pour qu'il réponde à ces trois requêtes:
```
// POST - Ajouter un livre en indiquant obligatoirement title, author_id et year (ID générée automatiquement, likes initialisés à 0)

mutation {
  addBook(title : 'Martine fait du GraphQL', author_id : 1, year : 2017) {
    id,
    likes
  }
}
```
```
// PUT - Incrémenter le nombre de likes d'un livre en indiquant son titre

mutation {
  likeBook(title : 'Martine fait du GraphQL') {
    likes
  }
}
```
```
// DELETE - Supprimer un livre en indiquant son id

mutation {
  deleteBook(id : 1) {
    author {
      books
    }
  }
}
```

_NB: Utiliser les collection "books" et "authors" initialisées dans src/db/index.js_