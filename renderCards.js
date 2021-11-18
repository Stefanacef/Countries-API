import createElement from "./createElement.js";
const countriesContainer = document.getElementById("countries");
const renderCards = (countries) => {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    const containerCard=createElement('div',{id:`${country.cca3}`, class:'card'});
    const div = createElement("div", {class:'a'});
    const bodyCard = createElement("div", {class:'card-body'});
    const img = createElement("img", { src: `${country.flags.png}` });
    const countryName=createElement('h3',{class:"country-name",text:`${country.name.official}`})
    const population=createElement('p',{text:`Population:  ${country.population}`})
    const region = createElement('p',{class:'country-region',text:`Region:  ${country.region}`})
    const capital = createElement('p',{class:'country-capital',text:`Capital:  ${country.capital}`})
    const countryLanguages=createElement('p',{class:'country-languages no', text:`${country.timezones}`})
    
    div.appendChild(img);
    bodyCard.appendChild(countryName)
    bodyCard.appendChild(population)
    bodyCard.appendChild(region)
    bodyCard.appendChild(capital)
    bodyCard.appendChild(countryLanguages)
    containerCard.appendChild(div)
    containerCard.appendChild( bodyCard)
    countriesContainer.appendChild( containerCard)
});
};

export default renderCards