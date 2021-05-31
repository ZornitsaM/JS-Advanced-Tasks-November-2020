

let pops = [


    {name: 'Popo'},
    {age: 22},
    {height: 190},
    {eyecolor: 'blue'},
    


]

let person = pops.reduce((acc,x)=>({...acc,...x}),{});


console.log(person );
   
   
