const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../author/model");

const { getAllBooks } = require("./controllers");


bookRouter.post("/addbook", async (req, res) => {
    const [author] = await Author.findOrCreate({
        where: {
            author: req.body.author // searches for author, makes author is it doesn't exist
        }
    });
    const [genre] = await Genre.findOrCreate({
        where: {
            genre: req.body.genre // searches for author, makes author is it doesn't exist
        }
    });
    const book = await Book.create({
        title: req.body.title,
        AuthorId: author.dataValues.id,
        GenreId: genre.dataValues.id,
    });

    const successResponse = {
        book: book,
        message: "book created",
    };

res.status(201).json(successResponse)

});

bookRouter.get("/getAllBooks", async (req, res) => {
    const book = await Book.findAll({
        include: [{
            model: Author
        }, 
        {
            model: Genre
        }]
    });

    const successResponse = {
        book: book,
        message: "book found",
    };

res.status(201).json(successResponse)

});

bookRouter.get("/getAllBooksByAuthor/:author", async (req, res) => {
    console.log(req.params);
    const book = await Book.findOne({
        where: {
            author: req.params.author,
        },
        include: Book
    });

    const successResponse = {
        book: book,
        message: "book found via author",
    };

res.status(201).json(successResponse)

})

bookRouter.put("/updatebookbyauthor", async (req, res) => {
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

});

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

bookRouter.delete("/deleteAllEntries", async (req, res) => {
    console.log(req.body);
    const book = await Book.destroyAll({
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

bookRouter.delete("/findBookByTitle", async (req, res) => {
    console.log(req.body);
    const book = await Book.destroyAll({
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

module.exports = bookRouter;