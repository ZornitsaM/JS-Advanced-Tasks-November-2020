
function solve(arr){

let result = Number(arr[0]);
for (let i = 1; i < arr.length; i++) {
    
    let currentComand = arr[i];
    if (currentComand=="chop"){
        result/=2;
    }
    else if (currentComand=="dice"){
        result = Math.sqrt(result);
    }
    else if (currentComand=="spice"){
        result+=1;
    }
    else if (currentComand=="bake"){
        result*=3;
    }
    else if (currentComand=="fillet"){
        result=result-result*0.2;
    }
    console.log(result)
}
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);