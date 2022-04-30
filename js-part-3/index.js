// //DOM Manipulation:

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

//ADDING AND REMOVING CLASSES:
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

//Replacing a child
tn[0].replaceChild(boldElement, pElement);

//DOCUMENT INFO
console.log("document.location = ",document.location);
console.log("document.URL = ",document.URL);
console.log("document.title = ",document.title);
console.log("document.scripts = ",document.scripts);
console.log("document.domain = ",document.domain);

//SELECTING USING CLASS NAME
let sel = document.querySelector('.container')
console.log("document.querySelector('.container') = ",sel);

let selAll = document.querySelectorAll('.container')
console.log("document.querySelectorAll('.container') = ",selAll);

/////////////////////////////////////////////////////

//JAVASCRIPT EVENTS
console.log('Javascript Events: ');

function clicked(){
    console.log('The button was clicked');
}

//on load
window.onload = function(){
    // console.log('The page was loaded');
}

//click
Container1.addEventListener('click', function(){
    console.log('First container was clicked')
})

//mouseover
let elemId = document.getElementById('Container2');

Container2.addEventListener('mouseover', function(){
    elemId.classList.remove('text-success');
    elemId.classList.add('bg-primary');
})

//mouseout
Container2.addEventListener('mouseout', function(){ 
    elemId.classList.remove('bg-primary');
    // elemId.style.background = 'grey'
    elemId.classList.add('text-success');

})

//MOUSEUP AND MOUSEDOWN:

Container3.addEventListener('mouseup', function(){
    Container3.classList.remove('text-white')
    Container3.style.background = 'white'
})

Container3.addEventListener('mousedown', function(){
    Container3.style.background = 'rgb(57, 151, 131)'
    Container3.classList.add('text-white')
})

container4.addEventListener('click',function(){
    document.querySelectorAll('.container')[5].innerHTML = "<b>Text changed</b>"
})

//instagram.com/02.11.205 hacked septembersrich's soundcloud lmao

//ARROW FUNCTIONS

function sum1(a,b){
    return a+b;
}

sum2 = (a,b) =>{
    return a+b;
}

//SET TIMEOUT
textLog = () => {
    console.log('Logged Text');
}
// setTimeout(textLog, 2000);

//SET INTERVAL:
clr = setInterval(textLog,2000);
clearInterval(clr);

// use clearInterval()/clearTimeout() to cancel setInterval/setTimeout

/*
go to https://www.rapidtables.com/tools/click-counter.html 
and run this code in console xd :

addbtn = document.getElementById('addbtn');
aye = () => {addbtn.click();}
clr = setInterval(aye,100);
*/

//LOCAL STORAGE:
localStorage.setItem('name','pippo');
console.log(localStorage);

localStorage.getItem('name'); //returns the value of key passed
// localStorage.removeItem('name'); //removed item fromls
// localStorage.clear(); //clears ls

//JSON

obj = {name: "pippo", age: 18, a:{this:"that"}};
jso = JSON.stringify(obj);

console.log(jso);
console.log("type of jso = ", typeof jso);

parsed = JSON.parse(`{"name":"pippo","age":18,"a":{"this":"that"}}`);
console.log(parsed);

//TEMPLATE LITERALS:
//Backticks

a = 1000;
console.log(`These are my ${a} dollar shoes`);