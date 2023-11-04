export async function updateProductHandler(
  name,
  price,
  category,
  image,
  description,
  index
) {
  try {
    const response = await fetch(`http://localhost:5050/product/${index}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        category,
        image,
        description,
      }),
    });

    if (response.ok) {
      return "Product added successfully!";
    } else {
      const errorMessage = await response.text();
      return errorMessage;
    }
  } catch (error) {
    return error;
  }
}
