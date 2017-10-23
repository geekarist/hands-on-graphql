"use strict";
const {DB} = require("../../db");

function getAllAuthors() {
  return DB.authors.find();
}

function getAuthorById(id) {
  return DB.authors.findOne({id : id});
}

function getAuthorByLastName(lastName) {
  return DB.authors.findOne({lastName : lastName});
}

function updateAuthorLastName(id, newLastName) {
  const author = DB.authors.findOne({id : id});
  author.lastName = newLastName;
  return DB.authors.update(author);
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  getAuthorByLastName,
  updateAuthorLastName,
};
