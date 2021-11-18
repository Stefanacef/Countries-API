import renderCards from "./renderCards.js";

const filterCountriesByLanguage = (countries) => {
  const filterLangagesBtn = document.getElementById("Language");
  if (filterLangagesBtn.value === "All") {
    renderCards(countries);
  } else {
    const filteredCounties = countries.filter((country) => {
      if (country.languages == null) {
        return {};
      } else {
        return Object.values(country.languages).includes(filterLangagesBtn.value);
      }
    });
    renderCards(filteredCounties);
  }
};

export default filterCountriesByLanguage;
