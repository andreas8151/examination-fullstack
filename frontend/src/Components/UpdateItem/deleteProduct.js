export async function deleteProduct(index) {
  try {
    const data = await fetch(`http://localhost:5050/product/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.ok) {
      return "Product deleted successfully!";
    } else {
      const errorMessage = await data.text();
      return errorMessage;
    }
  } catch (error) {
    return error;
  }
}
