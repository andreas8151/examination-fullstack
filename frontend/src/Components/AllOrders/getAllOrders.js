export async function getAllOrders() {
  try {
    const data = await fetch("http://localhost:5050/order/");
    return data.json();
  } catch (error) {
    return error;
  }
}
