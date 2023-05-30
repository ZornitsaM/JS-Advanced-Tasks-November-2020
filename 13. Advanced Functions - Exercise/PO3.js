
function solve(name, age, weight, height) {

    let bmi = Math.round(weight / (height / 100) ** 2);
    let status = calcStatus(bmi);

    let person = {
        'name': name,
        personalInfo: {
            age,
            weight,
            height,
        },
        'BMI': bmi,
        'status': status
    };

    if (status == 'obese') {
        person.recommendation = 'admission required';
    }
    return person;

    function calcStatus(bmi) {

        if (bmi < 18.5) {
            return 'underweight'
        }
        else if (bmi < 25) {
            return 'normal'
        }
        else if (bmi < 30) {
            return 'overweight'
        }
        else if (bmi >= 30) {
            return 'obese'
        }
    }
}

solve('Honey Boo Boo', 9, 57, 137);

