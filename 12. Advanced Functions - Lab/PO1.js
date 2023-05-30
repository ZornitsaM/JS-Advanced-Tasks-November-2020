
function solution(num){

    return function (numTwo){
        return num+numTwo;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));






