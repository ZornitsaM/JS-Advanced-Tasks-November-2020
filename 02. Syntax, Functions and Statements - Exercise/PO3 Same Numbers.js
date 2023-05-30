
function solve(number) {

    let sum = 0;
    let lastDigit = number % 10;
    let equal = true;

    while (number / 10 > 0) {

        let current = number % 10;
        if (current != lastDigit) {

            equal = false;
        }

        lastDigit = current;
        sum += current;
        number= Math.floor(number/10);
    }
    console.log(equal);
    console.log(sum)
}

solve(1234);