import renderCards from "./renderCards.js";

const filterCountriesByTimezones = (countries) => {
  const filterTimezonesBtn = document.getElementById("TimeZone");
  if (filterTimezonesBtn.value === "All") {
    renderCards(countries);
  } else {
    const filteredCounties = countries.filter(
      (country) => country.timezones.indexOf(filterTimezonesBtn.value) !== -1
    );
    renderCards(filteredCounties);
  }
};

export default filterCountriesByTimezones;
