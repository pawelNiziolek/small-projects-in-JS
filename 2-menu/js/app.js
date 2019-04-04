/*
Zadanie:
-------------

Po kliknięciu na LI przełącz klasę .nav-el-active z obecnie zaznaczonego elementu na element kliknięty.

Zwróć uwagę, że klasa .nav-el-active jest nadawana na element LI a nie na A. Postaraj się sprawić, by
podczas takiego kliku strona nie była przeładowywana.
*/

document.addEventListener("DOMContentLoaded", function() {
  const ul = document.querySelector(".nav");
  const li = ul.querySelectorAll("li");

  li.forEach(el =>
    el.addEventListener("click", function(e) {
      e.preventDefault();
      const elem = el.parentElement.children;
      for (const el of elem) {
        el.classList.remove("nav-el-active");
      }
      this.classList.add("nav-el-active");
    })
  );
});
