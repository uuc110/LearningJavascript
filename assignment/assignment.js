let country = "India";
let continent = "Asia";
let population = 120;

console.log(country);
console.log(continent);
console.log(population + " Million");

// Data type Assignment

let isLand = country;
let language = "Hindi";

console.log(typeof isLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// # LECTURE: let, const and var
// const language;
// const country;
// const continent = "Asia";

// # Basic Operator

population = population / 2;
console.log(++population);
let populationOfFinland = 6;
let isMyCountryHasPopulationHigherThanFinland =
  populationOfFinland < population;
console.log(isMyCountryHasPopulationHigherThanFinland);
let averagePopulation = 33;
console.log(population > averagePopulation);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const Description = `Hi, My name is SOurabh Kushwah. I live in ${country}, its in the continent ${continent}. I speak ${language}.`;
console.log(Description);

// If Else Assignment

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${averagePopulation} million below average`
  );
}
