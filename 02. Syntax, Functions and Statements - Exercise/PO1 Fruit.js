
function solve(a,b,c){

    let weight = Number(b)/1000;
    let price = Number(c);
    let finalPrice = (weight*price).toFixed(2);
    
    let output = `I need $${finalPrice} to buy ${weight.toFixed(2)} kilograms ${a}.`;
    console.log(output)
}

