"use strict";
const {DB} = require("../../db");

function getBookById(bookId) {
  return DB.books.findOne({id : bookId});
}

function getBooksByAuthor(authorId) {
  return DB.books.find({author_id : authorId});
}

function addBook(bookId, bookTitle, bookAuthorId, bookYear) {
  return DB.books.insert({id : bookId, title : bookTitle, author_id : bookAuthorId, year : bookYear, likes : 0});
}

function deleteBook(bookId) {
  const book = DB.books.findOne({id : bookId});
  DB.books.remove(book);
  return book;
}

function likeBook(bookTitle) {
  const book = DB.books.findOne({title : bookTitle});
  book.likes += 1;
  return DB.books.update(book);
}

module.exports = {
  getBookById,
  getBooksByAuthor,
  addBook,
  deleteBook,
  likeBook,
};
