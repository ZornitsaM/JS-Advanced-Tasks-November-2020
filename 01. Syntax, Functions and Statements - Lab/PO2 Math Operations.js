
function solve(numberOne, numberTwo, operator){

    let result;

    if (operator=='+'){

      result=numberOne+numberTwo;

    }else if(operator=='-'){

        result=numberOne-numberTwo;


    }else if(operator=='*'){

        result=numberOne*numberTwo;


    }else if(operator=='/'){

        result=numberOne/numberTwo;


    }else if(operator=='%'){

        result=numberOne%numberTwo;


    }else if(operator=='**'){

        result=numberOne**numberTwo;

    }

    console.log(result);
}