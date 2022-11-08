const express = require('express')

const router = express.Router()

const moviesHandler = require("./moviesHandler")

router.get('/movies',moviesHandler.getAllMovies)
router.get("/movies/:id",moviesHandler.getMovieById)
// router.post("/products", productHandler.createProduct)
// router.put('/products/:id', productHandler.editProduct)
// router.delete('/products/:id', productHandler.deleteProduct)

module.exports = router