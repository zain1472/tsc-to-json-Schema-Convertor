const lookup = require("country-code-lookup");
const cities = require("./cities.json");

let countries = require("./countries.json");
const nationalityData = require("./nationalityData.json");

const continentNationality = {
  Asia: "Asian",
  Africa: "African",
  Antarctica: "Antarctican",
  Europe: "European",
  Americas: "American",
  Oceania: "Oceanian",
  "Atlantic Ocean": "Oceanian",
};
for (const country of countries) {
  const theCities = cities[country.name];
  if (theCities) {
    country.cities = JSON.stringify(theCities);
    // console.log("found");
  } else {
    console.log("not found for ", country.name);
  }
}

const json = JSON.stringify(countries);
var fs = require("fs");
fs.writeFile("myjsonfile.json", json, "utf8", () => {
  console.log("done");
});
