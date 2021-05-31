



function solve(input, criet){

    criet ==='asc' ? input.sort((a,b)=>(a-b)) : input.sort((a,b)=>(b-a));
    return input;
   

}

solve([14, 7, 17, 6, 8], 'asc');