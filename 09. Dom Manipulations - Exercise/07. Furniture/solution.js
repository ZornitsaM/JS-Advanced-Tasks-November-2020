function solve() {

  let [generate,buy] = [...document.querySelectorAll('button')];
  
  let [input,output] = [...document.querySelectorAll('textarea')];

  generate.addEventListener('click', () => {

    //let input = document.querySelectorAll('textarea')[0];
    let products = JSON.parse(input.value)

    products.forEach(product => {

      let { name, img, price, decFactor } = product;

      let htmlString = `<tr>\n
        <td><img src=${img}></td>\n
        <td><p>${name}</p></td>\n
        <td><p>${price}</p></td>\n
        <td><p>${decFactor}</p></td>\n
        <td><input type="checkbox"/></td>\n
        </tr>`;
       
      document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeend', htmlString);
    });
    input.value = '';
  });

  buy.addEventListener('click', ()=>{

    let products=[];
    let prices = 0;
    let factors=[];

    [...document.querySelectorAll('tbody>tr')].forEach(tr=>{

      if(tr.querySelectorAll('input')[0].checked){

        let data = tr.querySelectorAll('p');
        products.push(data[0].textContent);
        prices+=Number(data[1].textContent);
        factors.push(Number(data[2].textContent));
      }
    })

    //let allSum = prices.reduce((sum,num)=>sum+=num);
    let avgFactor = factors.reduce((sum,num)=>sum+=num)/factors.length;
    //let output = document.querySelectorAll('textarea')[1];
    output.textContent= `Bought furniture: ${products.join(', ')}\nTotal price: ${prices.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
  })
}
