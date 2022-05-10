const inputEl = document.querySelector("#checkbox");
const priceMonthly = document.querySelectorAll(".plan__monthly");
const priceAnually = document.querySelectorAll(".plan__anually");

inputEl.addEventListener("click", function (e) {
  if (e.target.checked == true) {
    priceMonthly.forEach((element) => element.removeAttribute("hidden"));
    priceAnually.forEach((element) => element.setAttribute("hidden", true));
  } else {
    priceMonthly.forEach((element) => element.setAttribute("hidden", true));
    priceAnually.forEach((element) => element.removeAttribute("hidden"));
  }
});
