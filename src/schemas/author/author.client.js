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

module.exports = {
  getAllAuthors,
  getAuthorById,
  getAuthorByLastName,
};
