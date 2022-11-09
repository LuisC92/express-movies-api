const express = require('express')

const router = express.Router()

const moviesHandler = require("./moviesHandler")

router.get('/',moviesHandler.getAllMovies)
router.get("/:id",moviesHandler.getMovieById)
router.post("/", moviesHandler.createMovie)
router.put('/:id', moviesHandler.editMovie)
router.delete('/:id', moviesHandler.deleteMovie)

module.exports = router