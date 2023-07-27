console.info('Customer store loaded!');


document.addEventListener("alpine:init", () => {
    Alpine.store("customer", {
      name: null,
      email: null,
      phone: null,
    });
  });
  