

// function solve(input){

// input.sort((current,next)=>compare(current,next)).forEach(e=>console.log(e));
    
// }


// function compare(current, next){

//     if( current.length > next.length){

//         return 1;
//     }
//     else if(current.length === next.length){

//         return current>next;

//     }
//     else{
//         return -1;
//     }
// }


function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
  }



  
solve(['test', 
'Deny', 
'omen', 
'Default']
)
