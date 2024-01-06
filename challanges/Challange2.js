const calcTip= (bill) => {
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i< bills.length ; i++){
    let current_tip = calcTip(bills[i]);
    let total = current_tip + bills[i];
    tips.push(current_tip);
    totals.push(total);
}

for (let i=0; i< bills.length; i+=1){
    console.log(totals[i]);
}