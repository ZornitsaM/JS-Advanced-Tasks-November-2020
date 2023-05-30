
function solve(arr) {

    let km = Number(arr[0]);
    let place = arr[1];
    let output;

    if (place == "city") {

        if (km > 50) {

            if (km <= 70) {
                output = "speeding";
            }
            else if (km <= 90) {
                output = "excessive speeding";
            }
            else {
                output = "reckless driving";
            }
        }
        else {
            output = "";
        }
    }
    else if (place == "motorway") {
        if (km > 130) {

            if (km <= 150) {
                output = "speeding";
            }
            else if (km <= 170) {
                output = "excessive speeding";
            }
            else {
                output = "reckless driving";
            }
        }
        else {
            output = "";
        }
    }
    else if (place == "interstate") {
        if (km > 90) {

            if (km <= 110) {

                output = "speeding";
            }
            else if (km <= 130) {
                output = "excessive speeding";
            }
            else {
                output = "reckless driving";
            }
        }
        else {

            output = "";
        }
    }
    else if (place == "residential") {
        if (km > 20) {

            if (km <= 40) {
                output = "speeding";
            }
            else if (km <= 60) {
                output = "excessive speeding";
            }
            else {
                output = "reckless driving";
            }
        }
        else {
            output = "";
        }
    }
    console.log(output);
}

solve([120, 'interstate']);