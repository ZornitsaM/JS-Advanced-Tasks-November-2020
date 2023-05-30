
function solve(input) {

    let jsonData = input.shift();
    let students = JSON.parse(jsonData);
    let first = students[0];
    let second = students[1]

    let html = '<table>';

    html +=`<tr>${Object.keys(first).map(x=>`<th>${x}</th>`).join('')}</tr>`;
    html += `<tr>${Object.values(first).map(x=>`<td>${x}</td>`).join('')}</tr>`;
    html += `<tr>${Object.values(second).map(x=>`<td>${x}</td>`).join('')}</tr>`;

    html += '</table>';

    return html;
}

solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])