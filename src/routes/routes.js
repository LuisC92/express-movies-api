const express = require('express')

const router = express.Router()

const moviesController = require("../controllers/moviesController")

router.get('/movies',moviesController.getAllMovies)
router.get("/movies/:id",moviesController.getMovieById)
router.post("/movies", moviesController.createMovie)
router.put('/movies/:id', moviesController.editMovie)
router.delete('/movies/:id', moviesController.deleteMovie)

module.exports = router