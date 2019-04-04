/*
Zadanie:
-------------

Po kliknięciu w link w zakładkach:
- przełącz aktywną zakładkę (zmieniając klasę tab-el-active)
- pokaż treść zakładki na którą kieruje dany link, ukryj pozostałe treści
*/

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tab");
  const links = tabs.querySelectorAll(".tab-link");

  for (const link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const element = link.parentElement.parentElement.children;

      for (let el of element) {
        el.classList.remove("tab-el-active");
      }
      link.parentElement.classList.add("tab-el-active");

      const el = document.querySelector(this.getAttribute("href"));

      const content = el.parentElement.children;

      for (let item of content) {
        item.classList.remove("tab-content-active");
      }
      el.classList.add("tab-content-active");
    });
  }
});
