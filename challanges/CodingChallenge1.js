const MarksHeight = 1.69;
const MarksWeight = 78;

const jhonHeight = 1.95;
const jhonWeight = 92;

const MarksHeight2 = 1.88;
const MarksWeight2 = 95;

const jhonHeight2 = 1.76;
const jhonWeight2 = 85;

const marksBMI = MarksWeight / MarksHeight ** 2;
const JhonBMI = jhonWeight / jhonHeight ** 2;
const marksBMI2 = MarksWeight2 / MarksHeight2 ** 2;
const JhonBMI2 = jhonWeight2 / jhonHeight2 ** 2;
const markHeigherBMI = marksBMI > JhonBMI;
const markHeigherBMI2 = marksBMI2 > JhonBMI2;
console.log(marksBMI, JhonBMI);
console.log(marksBMI2, JhonBMI2);
console.log(markHeigherBMI);
console.log(markHeigherBMI2);
console.log();
// Coding Challenge 2;

const marksTotalBMI = marksBMI + marksBMI2;
const jhonsTotalBMI = JhonBMI + JhonBMI2;

if (marksTotalBMI < jhonsTotalBMI) {
  console.log(`Jhon's BMI is Higher than Marks's BMI`);
} else {
  console.log(`Marks's BMI is Higher than Jhon's BMI`);
}

if (marksTotalBMI < jhonsTotalBMI) {
  console.log(
    `Jhon's BMI (${jhonsTotalBMI.toPrecision(
      15
    )}) is higher than Mark's (${marksTotalBMI})`
  );
} else {
  console.log(
    `Marks's BMI (${marksTotalBMI}) is higher than Jhon's (${jhonsTotalBMI})`
  );
}
