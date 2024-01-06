const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}

/*
* push: add at the end of an array
* unshift: add at the beginning of an array
* pop: remove the last element of an array
* shift: remove the first element of an array
*/

