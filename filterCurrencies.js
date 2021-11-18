import renderCards from "./renderCards.js";

const filterCountriesByCurrencies = (countries) => {
  const filterCurrenciesBtn = document.getElementById("Currencies");
  if (filterCurrenciesBtn.value === "All") {
    renderCards(countries);
  } else {
    const filteredCounties = countries.filter((country) => {
      if (country.currencies == null) return {};
      else {
        return Object.keys(country.currencies).indexOf(filterCurrenciesBtn.value) != -1;
      }
    });
    renderCards(filteredCounties);
  }
};

export default filterCountriesByCurrencies;
