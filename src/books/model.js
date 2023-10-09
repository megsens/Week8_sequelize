const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
    },
    AuthorID: {
        type: DataTypes.INTEGER
    },
    GenreID:{
        type: DataTypes.INTEGER
    }
        
});

module.exports = Book;