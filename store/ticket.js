console.info("Ticket store loaded!");

document.addEventListener("alpine:init", () => {
  Alpine.store("ticket", {
    time : null,
    price : null,
    movie: null,
    seats : 0
  });
});
