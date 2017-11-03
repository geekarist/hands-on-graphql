"use strict";
const {DB} = require("../../db");

function getBookById(bookId) {
  return DB.books.findOne({id : bookId});
}

function getBooksByAuthor(authorId) {
  return DB.books.find({author_id : authorId});
}

// TODO : Trouver un livre par son titre
function getBookByTitle(bookTitle) {
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
  getBookByTitle,
  deleteBook,
  likeBook,
};
