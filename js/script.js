const toggleCheckbox = document.querySelector(".toggle__checkbox");
const annualPlan = document.querySelectorAll(".plan__price--annually");
const monthlyPlan = document.querySelectorAll(".plan__price--monthly");

toggleCheckbox.addEventListener("click", (e) => {
  if (e.target.checked === false) {
    annualPlan.forEach((element) => element.removeAttribute("hidden"));
    monthlyPlan.forEach((element) => element.setAttribute("hidden", true));
  } else {
    annualPlan.forEach((element) => element.setAttribute("hidden", true));
    monthlyPlan.forEach((element) => element.removeAttribute("hidden"));
  }
});
