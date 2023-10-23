const pool = require("../../server");
const { addProductValidation } = require("./validation/addProductValidation");

function addProduct(req, res) {
  const { error, value } = addProductValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { name, image, description, price, category } = value;

  const sql =
    "INSERT INTO products ( name ,image, description, price, category) VALUES ( ?, ?, ?, ?, ?)";

  pool.execute(
    sql,
    [name, image, description, price, category],
    (err, result) => {
      if (err) {
        res.status(500).send("Error in server" + err);
        return;
      }
      if (result.affectedRows > 0) {
        res.status(201).send("Success");
      }
    }
  );
}

module.exports = { addProduct };
