var link=document.querySelector(".contacts-button"),popup=document.querySelector(".modal-write-us"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),email=popup.querySelector("[name=email]"),textarea=popup.querySelector("[name=textarea]"),storage=localStorage.getItem("login");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),login.focus(),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value&&textarea.value||(e.preventDefault(),console.log("Нужно ввести имя, e-mail и текст сообщения"),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});