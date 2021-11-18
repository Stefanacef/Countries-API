import renderCards from "./renderCards.js";
import renderFilters from "./renderFilters.js";

const URL = "https://restcountries.com/v3.1/all";

const initialize = (countriesDra) => {
  const countries = countriesDra;

  renderCards(countries);
  renderFilters(countries);
};

fetch(URL)
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log(err));

//   // INPUT FOCUSS
//   const focus = function (e) {
//     let inputVal = e.target;
//     if (!isNaN) e.target.value = "";
//     else e.target.value = inputVal = "";
//   };
//   searchEl.addEventListener("focusout", focus);

//   const keydown = function (e) {
//     if (e.key === "Enter") e.target.blur();
//   };
//   searchEl.addEventListener("keydown", keydown);
// };
