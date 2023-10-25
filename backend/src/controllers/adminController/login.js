const pool = require("../../server");
const bcrypt = require("bcrypt");

function login(req, res) {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admins WHERE email = ?";

  pool.execute(sql, [email], (err, result) => {
    if (err) {
      res.status(500).send("Error in server" + err);
      console.log(err);
      return;
    }

    if (result.length === 0) {
      res.status(401).send("Invalid email or password");
      return;
    }

    const cryptoPassword = result[0].password;
    const isPasswordMatch = bcrypt.compareSync(password, cryptoPassword);

    if (isPasswordMatch) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid email or password");
    }
  });
}

module.exports = { login };
