
function solve(dayOfWeek) {

    let output;

    if (dayOfWeek == 'Monday') {
        output = 1;
    }
    else if (dayOfWeek=='Tuesday') {
        output = 2;
    }
    else if (dayOfWeek=='Wednesday') {
        output = 3;
    }

    else if (dayOfWeek=='Thursday') {
        output = 4;
    }

    else if (dayOfWeek=='Friday') {
        output = 5;
    }
    else if (dayOfWeek=='Saturday') {
        output = 6;
    }
    else if (dayOfWeek=='Sunday') {
        output = 7;
    }
    else {
        output = 'error'
    }   
    console.log(output);
}

//solve('Monday');