# hands-on-graphql
Build your first graphQL runtime step by step !

## Exercice 2

### IMPORTANT
- **la correction de l'exercice utilise l'implémentation javascript de [graphql](https://github.com/graphql/graphql-js).**
- **Afin de pouvoir tester facilement le service graphql tout au long du hands-on, lancer la tâche `npm run watch` et  utiliser [graphiql](https://github.com/graphql/graphiql) à l'url`localhost:4000/graphql`**

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

_NB: Utiliser la collection "books" initialisée dans src/db/index.js_