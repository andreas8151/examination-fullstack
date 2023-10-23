const pool = require("../../server");

function getOrders(req, res) {
  const sql = "SELECT * FROM orders";

  pool.execute(sql, (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    res.status(200).send(result);
  });
}

module.exports = { getOrders };
