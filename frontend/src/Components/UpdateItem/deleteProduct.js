export async function deleteProduct(index) {
  try {
    const data = await fetch(`http://localhost:5050/product/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return error;
  }
}
