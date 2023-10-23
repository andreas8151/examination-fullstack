const pool = require("../../server");

function getAdmins(req, res) {
  const sql = "SELECT * FROM admins";

  pool.execute(sql, (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    res.status(200).send(result);
  });
}

module.exports = { getAdmins };
