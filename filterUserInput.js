import renderCards from "./renderCards.js";

const filterCountriesByUserInput = (countries) => {
const filterUserInputBtn = document.getElementById("search");
  const filteredCounties = countries.filter(
    (country) =>country.name.official.toLowerCase().includes(filterUserInputBtn.value.toLowerCase()) 
  );
  renderCards(filteredCounties);
};

export default filterCountriesByUserInput;
