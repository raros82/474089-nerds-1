var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=textarea]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();

    if (storage) {
login.value = storage;
password.focus();
  } else {
login.focus();
 }
  });

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!login.value || !email.value || !textarea.value ) {
evt.preventDefault();
console.log("Нужно ввести имя, e-mail и текст сообщения");
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
}

});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (popup.classList.contains("modal-show")) {
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
}
}
});