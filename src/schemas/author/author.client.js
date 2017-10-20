"use strict";
const {find} = require("lodash");
const authors = require("../../documents/authors");

function getAllAuthors() {
  return authors;
}

function getAuthorById(id) {
  return find(authors, author => author.id === id);
}

function getAuthorByLastName(lastName) {
  return find(authors, author => author.lastName === lastName);
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  getAuthorByLastName,
};
