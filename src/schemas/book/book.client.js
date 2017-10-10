"use strict";
const {find} = require("lodash");
const books = require("../../documents/books");

function getAllBooks() {
  return books;
}

function getBookById(bookId) {
  return find(books, book => book.id === bookId);
}

function getBooksByAuthor(authorId) {
  return books.filter(book => book.author_id === authorId);
}

module.exports = {
  getAllBooks,
  getBookById,
  getBooksByAuthor,
};
