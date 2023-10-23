const pool = require("../../server");

const { orderValidation } = require("./validation/orderValidation");

function addOrder(req, res) {
  const { error, value } = orderValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { name, email, phone, address, products, price, status } = value;

  const sql =
    "INSERT INTO orders (name, email, phone, address, products, price, status) VALUES (?, ?, ?, ?, ?, ?, ?)";

  pool.execute(
    sql,
    [name, email, phone, address, products, price, status],
    (err, result) => {
      if (err) {
        res.status(500).send("Error in server" + err);
        return;
      }
      res.status(200).send("Success");
    }
  );
}

module.exports = { addOrder };
