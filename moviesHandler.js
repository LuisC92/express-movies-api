const connection = require("./db");

const getAllMovies = (req, res) => {
  connection
    .query("SELECT * FROM movies")
    .then(([results]) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving products from db.");
    });
};

const getMovieById = (req, res) => {
  const { id } = req.params;
  connection
    .query("SELECT * FROM movies WHERE id = ?", [id])
    .then(([results]) => {
      if (results.length) {
        res.json(results[0]);
      } else {
        res.sendStatus(404);
      }
    });
};

const createMovie = (req, res) => {
  const { title, director, year, color, duration } = req.body;
  connection
    .query(
      "INSERT INTO movies (title, director, year, color, duration) VALUES (?,?,?,?,?)",
      [title, director, year, color, duration]
    )
    .then(([result]) => {
      // console.log(result)
      const createdMovie = {
        id: result.insertId,
        title,
        director,
        year,
        color,
        duration,
      };
      res.status(201).json(createdMovie);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editMovie = (req, res) => {
  connection
    .query("UPDATE movies SET ? WHERE id = ?", [req.body, req.params.id])
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteMovie = (req, res) => {
  connection
    .query("DELETE FROM movies WHERE id = ?", [req.params.id])
    .then(([result]) => {
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
