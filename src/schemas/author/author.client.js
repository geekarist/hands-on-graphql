"use strict";
const {find} = require("lodash");
const authors = require("../../documents/authors");

function getAllAuthors() {
  return authors;
}

function getAuthorById(id) {
  return find(authors, author => author.id === id);
}

module.exports = {
  getAllAuthors,
  getAuthorById,
};
