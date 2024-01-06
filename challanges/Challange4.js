const calcTip= (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i< bills.length ; i++){
    let current_tip = calcTip(bills[i]);
    let total = current_tip + bills[i];
    tips.push(current_tip);
    totals.push(total);
}

for (let i=0; i< bills.length; i+=1){
    console.log(`Total Tips + bill after Calculation: ${totals[i]}`);
}

console.log(`Average of whole bill after calculation ${calcAverage(bills)}`)