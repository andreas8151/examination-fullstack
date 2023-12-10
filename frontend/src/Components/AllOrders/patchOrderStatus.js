export async function patchOrderStatus(id) {
  try {
    const response = await fetch(`http://localhost:5050/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return "Order status updated successfully!";
    } else {
      const errorMessage = await response.text();
      return errorMessage;
    }
  } catch (error) {
    return error;
  }
}
