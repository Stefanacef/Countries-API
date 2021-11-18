const region = (countries) => {
  return [...new Set(countries.map((el) => el.region))];
};
const timeZone = (countries) => {
  return [
    ...new Set(
      countries
        .map((el) => el.timezones)
        .flat(1)
        .sort()
    ),
  ];
};
const language = (countries) => {
  return [
    ...new Set(
      countries
        .map((el) => {
          if (el.languages == null) return {};
          else return Object.values(el.languages);
        })
        .flat(1)
        .sort()
    ),
  ];
};

const currencies = (countries) => {
  return [
    ...new Set(
      countries
        .map((el) => {
          if (el.currencies == null) return {};
          else return Object.keys(el.currencies);
        })
        .flat(1)
    ),
  ].sort();
};

export { region, language, timeZone, currencies };
