
function solve(a,b) {

let result=0;
let startNum = Number(a);
let finalNum = Number(b);

for (let i = startNum; i <= finalNum; i++) {
    
    result+=i;
}
return result;
}

