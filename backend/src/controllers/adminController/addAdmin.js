const pool = require("../../server");

const { adminValidation } = require("./validation/adminValidation");

function addAdmin(req, res) {
  const { error, value } = adminValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { email, password } = value;

  const sql = "INSERT INTO admins ( email, password) VALUES ( ?, ?)";

  pool.execute(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      return;
    }
    res.status(200).send("Success");
  });
}

module.exports = { addAdmin };
