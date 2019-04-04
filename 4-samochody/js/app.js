/*
Zadanie:
-------------
po kliknięciu na przycisk przy przy samochodzie:
- pokaż element .car-detail dla danego samochodu.
- zmień tekst na przycisku na "schowaj detale".
- dodaj klasę .car-show-detail do danego samochodu - elementu .car

Po ponownym kliknięciu na przycisk
- Przywróć początkowy tekst na przycisku (pokaż detale)
- schowaj .car-detail danego samochodu
- usuń klasę .car-show-detail z danego samochodu
*/

document.addEventListener("DOMContentLoaded", function() {
  const cars = document.querySelectorAll(".car");
  for (const car of cars) {
    const btn = car.querySelector(".car-toggle-detail");
    btn.addEventListener("click", function() {
      car.classList.toggle("car-show-detail");

      const details = car.querySelectorAll(".car-detail");

      for (const detail of details) {
        if (car.classList.contains("car-show-detail")) {
          detail.style.display = "";
          btn.textContent = "schowaj detale";
        } else {
          detail.style.display = "none";
          btn.textContent = "pokaż detale";
        }
      }
    });
  }
});
