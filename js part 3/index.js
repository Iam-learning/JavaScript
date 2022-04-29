//DOM Manipulation:
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

elemClass[0].style.background = 'pink';
elemClass[1].classList.add("bg-primary");
elemClass[2].classList.add("text-success");
// elemClass[2].classList.remove("text-success");

//innerHTML, innerText:
console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innerText)

console.log("elem.innerHTML = ",elem.innerHTML);
console.log("elem.innerText = ",elem.innerText);

console.log("elemClass[0].innerHTML = ",elemClass[0].innerHTML);
console.log("elemClass[0].innerText = ",elemClass[0].innerText);

//TagName
let tn = document.getElementsByTagName('div');
console.log("document.getElementsByTagName('div') = ",tn)

//Append child:
pElement = document.createElement('p');
pElement.innerText = 'This text is added by creating a new p element and adding text in it.';

tn[0].appendChild(pElement);

boldElement = document.createElement('b');
boldElement.innerText = "This text is bolded by creating a bold element";

tn[0].replaceChild(boldElement, pElement);

console.log("document.location = ",document.location);
console.log("document.URL = ",document.URL);
console.log("document.title = ",document.title);
console.log("document.scripts = ",document.scripts);
console.log("document.domain = ",document.domain);

let sel = document.querySelector('.container')
console.log("document.querySelector('.container') = ",sel);

let selAll = document.querySelectorAll('.container')
console.log("document.querySelectorAll('.container') = ",selAll);