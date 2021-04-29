

function solve(a){

    let type = typeof(a)
    

    if (type ==='number'){

        let area=a*a*Math.PI;
        console.log(area.toFixed(2));
        
    }

    else {

        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }   
}