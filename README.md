# hands-on-graphql
Build your first graphQL runtime step by step !

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
