const pool = require("../../server");

function deleteOrder(req, res) {
  const { id } = req.params;

  const sql = "DELETE FROM orders WHERE id = ?";

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

module.exports = { deleteOrder };
