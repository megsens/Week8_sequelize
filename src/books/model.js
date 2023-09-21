const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
});

module.exports = Book;