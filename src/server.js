require("dotenv").config();
// imports express
// imports port
// assigns express to "app"

// initializes express

const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const { DataTypes } = require("sequelize");
const connection = require(".db/connection");

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

// "app" = loaded express into APP, to access the ".GET" method (or "GET Request"), the ".GET" method corresponds to a HTTP Verb

// "/health" = connects to the health URL to which the request will be going to i.e: http://localhost/health

// req = request, res = response

// "res.status(200)" = send this message to client, Thunder Client will receive this message

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});