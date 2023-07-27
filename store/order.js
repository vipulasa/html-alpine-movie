console.info("Order store loaded!");

document.addEventListener("alpine:init", () => {
  Alpine.store("order", {
    ticket: null,
    creditCard: null,
    customer: null,
  });
});
