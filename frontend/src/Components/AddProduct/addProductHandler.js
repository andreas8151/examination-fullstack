export async function addProductHandler(
  name,
  price,
  category,
  image,
  description
) {
  try {
    const response = await fetch(`http://localhost:5050/product/`, {
      method: "POST",
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
