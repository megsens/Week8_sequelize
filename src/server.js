require("dotenv").config();
// imports express
// imports port
// assigns express to "app"

// initializes express

const express = require("express");

const Book = require("./books/model");
const Genre = require("./genres/model");

const bookRouter = require("./books/routes");
const genreRouter = require("./genres/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = () => {

    Genre.hasMany(Book);
    Book.belongsTo(Genre); 


    Genre.sync();
    Book.sync();

        // creates and then connects the 1 to 1 relationship

};


// "app" = loaded express into APP, to access the ".GET" method (or "GET Request"), the ".GET1" method corresponds to a HTTP Verb

// "/health" = connects to the health URL to which the request will be going to i.e: http://localhost/health

// req = request, res = response

// "res.status(200)" = send this message to client, Thunder Client will receive this message

app.use("/books", bookRouter);
app.use("/genres", genreRouter);


app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
});