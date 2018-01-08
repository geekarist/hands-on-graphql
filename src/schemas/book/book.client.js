"use strict";
const {DB} = require("../../db");

// TODO définir la fonction de requête à la collection "books"

function findBookById(id) {
    return DB.books.findOne({ id: id });
}

module.exports = {
    findBookById: findBookById
};
