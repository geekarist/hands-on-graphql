"use strict";
const Loki = require("lokijs");
const authors = require("../documents/authors");
const books = require("../documents/books");

const db = new Loki("db.json");

function getCollection(collectionName, db) {
  const lokiCollection = db.addCollection(collectionName);
  const collectionData = require("../documents/" + collectionName);
  collectionData.map((item) => {
    lokiCollection.insert(item);
  });
  return lokiCollection;
}

const collections = {};
['authors', 'books'].map((collectionName) => {
  collections[collectionName] = getCollection(collectionName, db);
});

module.exports = {
  DB : collections
};
