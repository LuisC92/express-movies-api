const express = require('express')

const router = express.Router()

const moviesHandler = require("./moviesHandler")

router.get('/movies',moviesHandler.getAllMovies)
router.get("/movies/:id",moviesHandler.getMovieById)
router.post("/movies", moviesHandler.createMovie)
router.put('/movies/:id', moviesHandler.editMovie)
router.delete('/movies/:id', moviesHandler.deleteMovie)

module.exports = router