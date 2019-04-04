/*
Zadanie:
-------------

Przy wysyłce formularza dodaj do listy nowego użytkownika. Niech formularz nie przeładowuje strony.
Postaraj się nie podpinać zdarzenia click dla button:submit, a podpiąć się pod zdarzenie submit dla formularza.

Po kliknięciu na przycisk usuwania (kosz na śmieci) usuń danego użytkownika z listy
*/

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".form");
  form.addEventListener("click", function(e) {
    e.preventDefault();

    const inputName = form.querySelector("input[name='name']");
    const inputPhone = form.querySelector("input[name='phone']");

    if (inputName.value !== "" && inputPhone.value !== "") {
      const li = document.createElement("li");
      li.classList.add("user");

      let user = `
    <div class="user-data">
    <div class="user-name">{{name}}</div>
    <div class="user-phone">{{phone}}</div>
</div>
<button type="button" class="btn user-delete">
    Usuń
</button>`;

      user = user.replace("{{name}}", inputName.value);
      user = user.replace("{{phone}}", inputPhone.value);

      li.innerHTML = user;

      document.querySelector(".user-list").appendChild(li);

      inputName.value = "";
      inputPhone.value = "";
    }
  });

  document.querySelector(".user-list").addEventListener("click", function(e) {
    if (
      e.target.parentElement.parentElement.classList.contains("user-list") &&
      e.target.classList.contains("user-delete")
    ) {
      const li = document.querySelector(".user");
      li.parentElement.removeChild(li);
    }
  });
});
