"use strict";
const {DB} = require("../../db");

function getAllBooks() {
  return DB.books.find();
}

function getBookById(bookId) {
  return DB.books.findOne({id : bookId});
}

function getBooksByAuthor(authorId) {
  return DB.books.find({author_id : authorId});
}

module.exports = {
  getAllBooks,
  getBookById,
  getBooksByAuthor,
};
