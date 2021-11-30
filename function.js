//Non primitive(3 types)-> arrays,objects,functions


//we can pass fxn inside fxn , return a fxn from fxn , fxn ka addreess we can put in a variable
//no need to give return type
// function fun_name
// {

// }


//fn defn
function sayHi(param)
{
    // console.log("Hello from say Hi");
    // console.log("param received",param);

    let rVal = Math.random() >0.5 ?true : "less than 0.5";
    return rVal;
    //here this rvaL returns sometimes a float value and sometimes string depending upon the value generated
     
}

//fn call or invocation
// sayHi(10);
// no need to type what type of variable you are passing
// sayHi("Hello");
// in js if you didn't pass and return and than print you get undefined
// let a = sayHi();
// console.log(a);
// let rVal=sayHi([1,2,3,4,5]);
// console.log("rvaL",rVal);

//return type is not fixed in this


//fxn are first class citizens - fxns are treated as a variable

//assignment , i can put one variable into another
// a = 10;
// let b = a;
// console.log(a);

// //just like we can put the address of fxn inside variable
// //it is called --> fxn expression

// let fnContainer = function fn()
// {
//     console.log("I am expression");
// }

// fnContainer();
//fn();it will give an error , if you assignmed add. to variable you can't do this now

//Below one is anonymous fxn , fxn ka address variable mai ja chuka hai , no need to give name to the fxn , it is optional but above one in 1 line it is necessaey to give fxn name

// let fnContainer1 = function ()
// {
//     console.log("I am also Anonymous fxn");
// }

// fnContainer1();

//IIFE --> Immediately invoked function expression
//you want to play chess before writing the program for chess first you need to make a chessboard
//iife are those fxns which will be called when the program starts
//these fxns will be called at the time of initialisation.

// require, pollution,closure concepts

// (function fn()
// {
//     console.log("I am IFFE");
//     console.log("i will run on my own");
// })();

//arrow fxn-->syntax , react ki atmaa hai ye

// let fn1 =(num)=>{return num*num;}

let fn1 =num=>num*num; //another way to write if we have single parameter


console.log(fn1(5)); 

//First class citizens
//functions are treated as a variable.
//assignment ->fxn expression
//variable can be passes as a parameter
//fxn can also be passes as a parameter inside another fxn
//callbacks

function sayHello(param)
{
    console.log("hello",param);
    return "djndjn";
}

//address
function smaller()
{
    console.log("Hello i am smaller");
}

sayHello([1,2,3,4,5]);
sayHello(smaller);