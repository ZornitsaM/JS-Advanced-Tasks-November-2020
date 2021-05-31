

function solve(input){

    let output = '<table>\n';
    let empl = [];

    input.forEach(e => {
        
       empl.push(JSON.parse(e));
    });


    output += arrayAsTable(empl) + '</table>';
    console.log(output);

    function arrayAsTable(empl){

        let result='';
        empl.forEach(x=>{
          result+='\t<tr>\n';
          Object.values(x).forEach(v=>{
    
          result+=`\t\t<td>${v}</td>\n`;
    
          })
    
         result+='\t</tr>\n';
    
        })
    
        return result;
    }
    
}



solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)