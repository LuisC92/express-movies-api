const connection = require("../../db");

const getAll = () => {
  return connection.query("SELECT * FROM movies").then(([results]) => results);
};

const getById = (id) => {
    return connection
    .query("SELECT * FROM movies WHERE id = ?", [id])
    .then(([results]) => results)
}

const createMovie = (body) => {
  return connection
    .query("INSERT INTO movies SET ?", body)
    .then(([result]) => result);
};

const editMovie = (body, id) => {
    return connection
        .query("UPDATE movies SET ? WHERE id = ?", [body, id])
        .then(([result]) => result)
}

const deletedMovie = (id) => {
    return connection
    .query("DELETE FROM movies WHERE id = ?", [id])
    .then(([result]) => result)
}

module.exports = {
  getAll,
  getById,
  createMovie,
  editMovie,
  deletedMovie
};
