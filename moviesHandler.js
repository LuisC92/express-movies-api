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

// const createProduct = (req, res) => {
//   const { name, price } = req.body;
//   connection
//     .query("INSERT INTO movies (name, price) VALUES (?, ?)", [name, price])
//     .then(([result]) => {
//       const createdProduct = { id: result.insertId, name, price };
//       res.status(201).json(createdProduct);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// const editProduct = (req, res) => {
//   connection
//     .query("UPDATE products SET ? WHERE id = ?", [req.body, req.params.id])
//     .then(([result]) => {
//       res.status(200).send(result);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

// const deleteProduct = (req, res) => {
//   connection
//     .query("DELETE FROM products WHERE id = ?", [req.params.id])
//     .then(([result]) => {
//       if (result.affectedRows)
//         res.status(204).send(`The product ${req.params.id} was been deleted`);
//       else res.sendStatus(404);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  getAllMovies,
  getMovieById
};
