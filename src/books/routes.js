const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const Genre = require("../genres/model");

const { getAllBooks } = require("./controllers");


bookRouter.post("/addbook", async (req, res) => {
    const genre = await Genre.findOne({ where: { genre: req.body.genre }});
    console.log("genre: ", genre);
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        GenreId: genre.id,
    });

    const successResponse = {
        book: book,
        message: "book created",
    };

res.status(201).json(successResponse)

});

bookRouter.get("/getAllBooks", async (req, res) => {
    console.log(req.body);
    const book = await Book.findAll({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    });

    const successResponse = {
        book: book,
        message: "book found",
    };

res.status(201).json(successResponse)

})

bookRouter.put("/updatebookauthor", async (req, res) => {
    console.log(req.body);
    const book = await Book.update({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    });

    const successResponse = {
        book: book,
        message: "book updated",
    };

res.status(201).json(successResponse)

})

bookRouter.delete("/deleteBook", async (req, res) => {
    console.log(req.body);
    const book = await Book.destroy({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    });

    const successResponse = {
        book: book,
        message: "book deleted",
    };

res.status(201).json(successResponse)

});

module.exports = bookRouter