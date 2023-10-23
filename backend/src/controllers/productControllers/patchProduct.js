const pool = require("../../server");
const { addProductValidation } = require("./validation/addProductValidation");

function patchProduct(req, res) {
  const { id } = req.params;

  const { error, value } = addProductValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { name, image, description, price, category } = value;

  const sql =
    "UPDATE products SET name = ?, image = ?, description = ?, price = ?, category = ? WHERE id = ?";

  pool.execute(
    sql,
    [name, image, description, price, category, id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error in server" + err);
        return;
      }
      if (result.affectedRows > 0) {
        res.status(200).send("Success");
      } else {
        res.status(404).send("Product not found");
      }
    }
  );
}

module.exports = { patchProduct };
