const pool = require("../../server");

const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  pool.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { getAllProducts };
