const { Router } = require("express");
const router = Router();

const Book = require("./model");


bookRouter.post("/addbook", async (req, res) => {
    console.log(req.body);
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    });

    const successResponse = {
        book: book,
        message: "book created",
    };

res.status(201).json(successResponse)

})

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

bookRouter.destroy("/deleteBook", async (req, res) => {
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

