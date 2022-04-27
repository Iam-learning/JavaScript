//DOM Manipulation:
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

elemClass[0].style.background = 'pink';
elemClass[1].classList.add("bg-primary");
elemClass[2].classList.add("text-success");
elemClass[2].classList.remove("text-success");


    