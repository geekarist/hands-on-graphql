"use strict";
const {DB} = require("../../db");

function getBookById(bookId) {
  return DB.books.findOne({id : bookId});
}

module.exports = {
  getBookById,
};
