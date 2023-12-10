const pool = require("../../server");

function statusOrder(req, res) {
  const { id } = req.params;

  const sql =
    "UPDATE orders SET status = CASE WHEN status = 1 THEN 0 ELSE 1 END WHERE id = ?";

  pool.execute(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    if (result.affectedRows > 0) {
      res.status(200).send("Success");
    } else {
      res.status(404).send("Order not found");
    }
  });
}

module.exports = { statusOrder };
