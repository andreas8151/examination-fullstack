const pool = require("../../server");

function getOrders(req, res) {
  const orderedSql = "SELECT * FROM orders ORDER BY status ASC, date DESC";

  pool.execute(orderedSql, (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    res.status(200).send(result);
  });
}

module.exports = { getOrders };
