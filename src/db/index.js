"use strict";
const Loki = require("lokijs");
const initialAuthors = require("./authors");
const initialBooks = require("./books");

const db = new Loki("db.json");

function createCollection(collectionName, items) {
  const lokiCollection = db.addCollection(collectionName);
  items.map((item) => lokiCollection.insert(item));
  return lokiCollection;
}

const collections = {
  authors : createCollection("authors", initialAuthors),
  books : createCollection("books", initialBooks),
};

module.exports = {DB : collections};
