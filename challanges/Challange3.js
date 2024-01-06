const mark = {
    name: "mark",
    mass: 78,
    height: 1.69,
};

const john = {
    name: 'john',
    mass: 92,
    height: 1.95
}

const calcBMI = (mass, height) => {
    return mass / height ** 2;
}


let MarksBMI = calcBMI(mark.mass, mark.height).toFixed(3);
let JohnsBMI = calcBMI(john.mass, john.height).toFixed(3);
if(MarksBMI > JohnsBMI){
    console.log(`Mark's BMI (${MarksBMI}) is higher than john's (${JohnsBMI})!`)
}else{
    console.log(`John's BMI (${JohnsBMI}) is higher than Mark's (${MarksBMI})!`)
}