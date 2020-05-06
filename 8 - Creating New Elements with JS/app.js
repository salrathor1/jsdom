const input = document.getElementById("input");
const submit = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
const showHide = document.getElementById("showhide-btn");

submit.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
});

showHide.addEventListener("click", ()=> {
    if(showHide.innerHTML == "hide") {
        list.style.visibility="hidden";
        showHide.innerHTML = "show";
    } else if (showHide.innerHTML == "show"){
        list.style.visibility="visible";
        showHide.innerHTML = "hide";

    }
});




// const input = document.getElementById('input');
// const button = document.getElementById('submit');

// const showhidebtn = document.getElementById('showhide-btn');

// button.addEventListener('click', () => {
//     let listItem = document.createElement('li');
//     let list = document.getElementsByTagName('ul')[0];
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     input.value = '';
// })

// //challenge cont'd
// //show/hide list
// //in console, type list.style to find object properties
// //then use list.style.display, it will show 'block' so you can show none
// showhidebtn.addEventListener("click", () => {
//     let list = document.getElementsByTagName('ul')[0];
//     if(list.style.display == 'none') {
//         list.style.display = 'block';
//         showhidebtn.textContent = 'hide';
//     } else {
//         list.style.display = 'none';
//         showhidebtn.textContent = 'show';
//     }
// })
// //inspect the html you can then see inline style as display:"none" added in when button clicked
