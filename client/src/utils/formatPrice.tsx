export const formatPrice = (price: number | undefined) => {
  if (price === undefined) {
    return "N/A"; // Or any other default value or message you prefer
  }

  const formattedPrice = `₱${price
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  const trimmedPrice = formattedPrice.slice(0, -3); // Remove the last 3 characters, including the decimal point
  return trimmedPrice;
};
