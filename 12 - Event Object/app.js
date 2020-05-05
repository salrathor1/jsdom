const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementsByTagName('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})

/*New code below*/

document.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.tagName);
})

list.addEventListener("mouseover",(event)=>{
    event.target.textContent = event.target.textContent.toUpperCase();})
list.addEventListener("mouseout",(event)=>{
    event.target.textContent = event.target.textContent.toLowerCase();})