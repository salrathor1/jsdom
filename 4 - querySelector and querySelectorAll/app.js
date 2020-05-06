// const listItems = document.querySelectorAll("li:nth-child(even)");

// console.log(listItems);
// (console.log(listItems.length));

//create a for loop to display all even items to have text color lightgreen;

const listItems = document.querySelectorAll("li:nth-child(even)");

for(let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "lightgreen";
} 
