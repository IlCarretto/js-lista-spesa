// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const itemsList = ["yogurt bianco ", "petto di pollo ", "burro d'arachidi ", "burro ", "pancarrè "]
console.log(itemsList);

let i = 0;
const items = document.querySelector(".items-list");

while (i < itemsList.length) {
    item = itemsList[i];
    console.log(item);
    items.innerHTML += `<div class="single-item">${item}</div>`;
    i++;
}


