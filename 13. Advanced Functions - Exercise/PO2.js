function solve(){

    let result=[];
    let count={};

    [...arguments].forEach(element => {
        
        let keyType = typeof(element);


        result.push({keyType,element});

        if(!count[keyType]){
            count[keyType]=0;
        }

        count[keyType]++;

    });

    result.forEach(x=>{

        console.log(`${x.keyType}: ${x.element}`);
        
    })

    Object.entries(count).sort((a,b)=>b[1]-a[1])
          .forEach(el=>console.log(`${el[0]} = ${el[1]}`));


}

solve('cat', 42, function () { console.log('Hello world!'); })