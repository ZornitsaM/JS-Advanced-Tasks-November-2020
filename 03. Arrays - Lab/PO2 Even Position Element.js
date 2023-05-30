function solve(numbers){

    let output = [];
   for (let i = 0; i < numbers.length; i++) {
      
    if (i%2==0){
        output.push(numbers[i]);
    }
   }
   console.log(output.join(" "));
}

solve(['20', '30', '40'])