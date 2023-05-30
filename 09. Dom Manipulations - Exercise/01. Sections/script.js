function create(words) {
   let content = document.getElementById('content');
   words.forEach(word => {

      let div = document.createElement('div');
      let paragr = document.createElement('p');
      paragr.innerText=word;
      paragr.style.display='none';
      div.addEventListener('click',()=>{
      })

      paragr.style.display='block';
      div.appendChild(paragr);
      content.appendChild(div)
   });
}