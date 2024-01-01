import { sweets } from "./data.js";
const data = JSON.parse(sweets);
console.log(data);

const content = document.querySelector('.content');

data.forEach(({ image, name, description }) => {
    const divSweets = document.createElement('div');
    divSweets.classList.add('sweets');
    content.appendChild(divSweets);

    const img = document.createElement('img');
    img.classList.add('sweets_img');
    img.src = image;
    divSweets.appendChild(img);

    const divSweetsWrap = document.createElement('div');
    divSweetsWrap.classList.add('sweets_wrap');
    divSweets.appendChild(divSweetsWrap);

    const productName = document.createElement('h2');
    productName.textContent = name;
    divSweetsWrap.appendChild(productName);

    const sweetsDescription = document.createElement('p');
    sweetsDescription.textContent = description;
    divSweetsWrap.appendChild(sweetsDescription);
});