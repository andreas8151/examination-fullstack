const pool = require("../../server");

const { adminValidation } = require("./validation/adminValidation");
function patchAdmin(req, res) {
  const { id } = req.params;

  const { error, value } = adminValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { email, password } = value;

  const sql = "UPDATE admins SET  email = ?, password = ? WHERE id = ?";

  pool.execute(sql, [email, password, id], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    if (result.affectedRows > 0) {
      res.status(200).send("Success");
    } else {
      res.status(404).send("Admin not found");
    }
  });
}

module.exports = { patchAdmin };
