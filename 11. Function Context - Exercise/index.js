function solve(){

   let tr = document.getElementsByTagName('tr');
   
   Array.from(tr).slice(1).forEach(row => {
      
      row.addEventListener('click',(event)=>{

         if(event.target.parentNode.style.backgroundColor==''){

            Array.from(tr).forEach(row=>{

               if(row.style.backgroundColor='#413f5e')
               row.style.backgroundColor='';
            })
            event.target.parentNode.style.backgroundColor='#413f5e';
         }
         else{
            event.target.parentNode.style.backgroundColor='';
         }
      })
   });
}
