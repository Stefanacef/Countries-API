import renderCards from "./renderCards.js";

const filterCountriesByRegion = (countries) => {
  const filterRegionBtn = document.getElementById("Region");
  if (filterRegionBtn.value === "All") {
    renderCards(countries);
  } else {
    const filteredCounties = countries.filter(
      (country) => country.region.indexOf(filterRegionBtn.value)!=-1
    );
    renderCards(filteredCounties);
  }
};

export default filterCountriesByRegion;
