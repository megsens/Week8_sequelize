const Book = require("./model");

const addBooks = async (req, res) => {
    try {
        
        const book = await Books.create({
            book: req.body.book,
        });

        res.status(2001).json({book: book, message: "Successfully added book "});
    } catch (error) {
        res.status(500).json({error: error, errorMessage: error.message });
    }
};

module.exports = {
    addBooks,
};