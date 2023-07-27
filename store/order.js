console.info("Order store loaded!");

document.addEventListener("alpine:init", () => {
  Alpine.store("order", {
    movie: null,
    timeSlot: null,
    customer: null,
    numberOfSeats: null,
    totalPrice: null,
    creditCard: null,
  });
});
