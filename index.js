// flow->top to bottom
// left to right

//dynamic language

//for priniting in javascript
console.log("Hello Js");

//declare variable
//JS only tell you that is a varioble not its type
let a; 
//by deafult undefined value hoti hai variable mai
console.log(a);

a=10;
a=10.1;
console.log("Variable contains", a);
a="Hello i am a string";
a='Hello i am also a string';
console.log("Variable contains", a);

a=null;
console.log("Variable contains", a);

a=true;
console.log("Variable contains", a);

//variable types : Primitive types : number , string , boolean , null,symbol
//flaot ni hota idhar

//if else,loops

//JS is synatically similar to ->C++,Java,C

// let number=10;

// for(let i=1; i<number;i++)
//     console.log(i);

//check if prime

let number =23;
let flag = true;

for(let i=2;i<number;i++)
{
    if(number%i==0)
        flag=false;
}

if(flag==true)
    console.log(number,"is prime");
else
     console.log(number,"is not prime");



