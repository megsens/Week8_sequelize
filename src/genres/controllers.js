const Author = require("./model");
const Genre = require("../genres/model");
const Book = require("../books/model");

const addGenre = async (req, res) => {
    try {
        
        const genre = await Genre.create({
            genre: req.body.genre,
        });

        res.status(201).json({genre: genre, message: "Successfully added genre "});
    } catch (error) {
        res.status(500).json({error: error, errorMessage: error.message });
    }
};

module.exports = {
    addGenre,
};