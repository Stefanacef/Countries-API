import createElement from "./createElement.js";
import generateFilterBtnsArea from "./generateFilterArea.js";
import filterCountriesByUserInput from "./filterUserInput.js"
import filterCountriesByRegion from "./firterRegion.js";
import filterCountriesByLanguage from "./filterLanguage.js";
import filterCountriesByTimezones from "./filterTimezones.js";
import filterCountriesByCurrencies from "./filterCurrencies.js";
const filtersContainer = document.getElementById("filters");
const renderFilters = (countries) => {
  filtersContainer.innerHTML = "";
  const input = createElement("input", {
    id: "search",
    class: "search",
    type: "text",
    placeholder: "Search for a country",
  });
  filtersContainer.appendChild(input);
  generateFilterBtnsArea(countries, filtersContainer);

  const filterUserInputBtn = document.getElementById("search");
  const filterRegionBtn= document.getElementById("Region");
  const filterLangagesBtn = document.getElementById("Language");
  const filterTimezonesBtn = document.getElementById("TimeZone");
  const filterCurrenciesBtn = document.getElementById("Currencies");
  
  filterUserInputBtn.addEventListener('keyup',()=>filterCountriesByUserInput(countries))
  filterRegionBtn.addEventListener("click", () => filterCountriesByRegion(countries));
  filterLangagesBtn.addEventListener("click", () => filterCountriesByLanguage(countries));
  filterTimezonesBtn.addEventListener("click", () =>filterCountriesByTimezones(countries));
  filterCurrenciesBtn.addEventListener("click", () =>filterCountriesByCurrencies(countries));
};

export default renderFilters;
