//cycle over the list items and apply colors from the array called colours

const listItems = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];


for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i];
}