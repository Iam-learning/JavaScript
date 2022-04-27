//ASSIGNMENT OPERATORS:
console.log("Assignments Operators: ");
var a = 100;
var b = 10;
console.log(" a + b = ", a + b);
console.log(" a - b = ", a - b);
console.log(" a * b = ", a * b);
console.log(" a / b = ", a / b);

//LOGICAL OPERATORS:

//AND OPERATOR:
console.log("Logical AND: ");
console.log(" t && t = ", true&&true);
console.log(" f && f = ", false&&false);
console.log(" t && f = ", true&&false);
console.log(" f && t = ", false&&true);

//OR OPERATOR:
console.log("Logical OR: ");
console.log(" t || t = ", true||true);
console.log(" f || f = ", false||false);
console.log(" t || f = ", true||false);
console.log(" f || t = ", false||true);

//NOT OPERATOR:
console.log("Logical NOT: ");
console.log(" !true = ", !true);
console.log(" !false = ", !false);

//FUNCTIONS: DRY (Do Not Repeat Yourself) concept
console.log("Fuctions: ");

function avg(a,b){
    c = (a+b)/2;
    return c;
   // It can also written as:
   // return (a+b)/2;
}

c1 = avg(54,23);
c2 = avg(38,12);
console.log(" avg(54,23) = ",c1);
console.log(" avg(38,12) = ",c2);

//CONDITIONAL STATEMENTS:
console.log("Conditional Statements: ");

var age = 18;
if ( age > 18){
    console.log(" age > 18 = ",age>18);
    console.log(" Eligible to Vote")
}
else{
    console.log(" age > 18 = ",age>18);
    console.log(" Not Eligible to Vote")
}

//USE OF LET, CONST
console.log("Using \033[3mlet\033[0m to declare variables:");
console.log(" It has block level scope, var is used to declare global variables.");

console.log("\033[3mconst\033[0m is used to declare constants which helps avoiding overriding values.");

//FOR LOOP
console.log("For Loop: ");

var arr = [1,2,3,4];
console.log(" arr = ",arr);
console.log(" Iterating an array using for loop: ")
for (var i=0; i<arr.length; i++){
        console.log(" ",arr[i]);
}

//alternate way:
console.log(" doing the same thing using forEach: ")
arr.forEach(function(element){
    console.log(" ",element);
})


//WHILE LOOP:
console.log("While Loop:")

let j = 0;
while(j<arr.length){
    console.log(" ", j);
    j++;
}

//BREAK and CONTINUE:
console.log("Break and Continue Statement");

for (var k=0; k<arr.length; k++){
    if(k==1){
        console.log(" continue skips an iteration.");
        continue;
    }
    if(k==3){
        console.log(" break ends the iteration.");
        break;
    }
    console.log(" ", arr[k]);
}

//ARRAY METHODS
console.log("Array Methods: ");

let arr2 = ["water", 23, null, true, "fan"];

console.log(" arr2 = ", arr2);
console.log(" arr2.length = ",arr2.length);

//pop removes the last element
arr2.pop();
console.log(" arr2.pop(4) = ",arr2);

arr2.push("ice");
console.log(" arr.push('ice') = ",arr2);

//shift removes the first element
arr2.shift();
console.log(" arr.shift() = ",arr2);

//unshift returns the array length
let newLen = arr2.unshift("lol");
console.log(" newLen = ",newLen);
console.log(' let newLen = arr2.unshift("lol") = ',arr2);

//string length
console.log("JavaScript String Methods: ");
let myString = "learning javascript go go go!";
console.log(" myString = ", myString);
console.log(" myString.length = ",myString.length);
console.log(' myString.indexOf("go") = ',myString.indexOf("go"));
console.log(' myString.lastIndexOf("go") = ',myString.lastIndexOf("go"));

//DATES
console.log("Dates: ");

let myDate = new Date();
console.log(myDate);
console.log(" myDate.getFullYear = ",myDate.getFullYear());