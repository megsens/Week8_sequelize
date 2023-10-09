const Book = require("./model");

const addBooks = async (req, res) => {
    try {
        
        const book = await Books.create({
            book: req.body.book,
            authorID: req.body.authorID,
            genreID: req.body.genreID
        });

        res.status(2001).json({book: book, message: "Successfully added book "});
    } catch (error) {
        res.status(500).json({error: error, errorMessage: error.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
       res.send("Hello from get all books") 
    } catch (error) {
        res.status(500).json({error: error, errorMessage: error.message }); 
    }
}

module.exports = {
    addBooks,
};