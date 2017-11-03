"use strict";
const {DB} = require("../../db");

function getBookById(bookId) {
  return DB.books.findOne({id : bookId});
}

function getBooksByAuthor(authorId) {
  return DB.books.find({author_id : authorId});
}

// TODO : Ajouter un livre
function addBook(bookTitle) {
}

// TODO : Supprimer un livre
function deleteBook(bookId) {
}

// TODO : Ajouter un like à un livre grâce à son titre
function likeBook(bookTitle) {
}

module.exports = {
  getBookById,
  getBooksByAuthor,
  addBook,
  deleteBook,
  likeBook,
};
