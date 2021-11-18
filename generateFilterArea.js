import { region, language, timeZone, currencies } from "./dataForFilters.js";
import createElement from "./createElement.js";
const generateFilterBtnsArea = (countries, filtersContainer) => {
  const filtersContentData = {
    Region: ["All", ...region(countries)],
    Language: ["All", ...language(countries)],
    TimeZone: ["All", ...timeZone(countries)],
    Currencies: ["All", ...currencies(countries)],
  };
  const keys = Object.keys(filtersContentData);
  const allRegions = filtersContentData.Region;
  const allLanguages = filtersContentData.Language;
  const allTimeZone = filtersContentData.TimeZone;
  const allCurrencies = filtersContentData.Currencies;

  const createFilterButtons = () => {
    keys.map((key) => {
      const filterTag = createElement("select", {
        class: "dropdown",
        id: key,
        name: key,
      });
      const label = createElement("label", {
        for: key,
        text: key,
      });
      filtersContainer.appendChild(label);
      filtersContainer.append(filterTag);
    });
  };
  const createFilterContent = (filterName, id) => {
    const element = document.getElementById(id);
    filterName.map((key) => {
      const allRegionName = createElement("option", {
        class: "dropdown",
        id: key,
        text: key,
        value: key,
      });
      element.appendChild(allRegionName);
    });
  };
  createFilterButtons();
  createFilterContent(allRegions, "Region");
  createFilterContent(allLanguages, "Language");
  createFilterContent(allTimeZone, "TimeZone");
  createFilterContent(allCurrencies, "Currencies");
};

export default generateFilterBtnsArea;
