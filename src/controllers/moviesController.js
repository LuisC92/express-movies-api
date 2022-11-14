// const connection = require("../../db");
const Movie = require("../models/moviesModel");

const getAllMovies = (req, res) => {
  Movie.getAll()
    .then((results) => res.json(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};

const getMovieById = (req, res) => {
  const { id } = req.params;
  Movie.getById(id)
    .then((results) =>
      results.length ? res.json(results[0]) : res.sendStatus(404)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};

const createMovie = (req, res) => {
  Movie.create(req.body)
    .then((result) => {
      const createdMovie = {
        id: result.insertId,
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
        color: req.body.color,
        duration: req.body.duration,
      };
      res.status(201).json(createdMovie);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editMovie = (req, res) => {
  Movie.edit(req.body, req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteMovie = (req, res) => {
  Movie.deletedMovie(req.params.id)
    .then(result => {
      if (result.affectedRows)
        res.status(204).send(`The movie ${req.params.id} was been deleted`);
      else res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovie,
  deleteMovie
};
