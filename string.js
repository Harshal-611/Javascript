// let singleQuotes='single quotes ki string';
// let doubleQuotes="double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);

//for getting any character but this character will be treated as string
// let char = singleQuotes.charAt(4);
// let ascii = singleQuotes.charCodeAt(4);
// let substr = singleQuotes.substring(2,4); 
//from(s,e-1) in substr fxn
// console.log(substr);
// console.log(ascii);
// console.log(char);

//join and split fxn -->majorly used fxn

// let arrStr = singleQuotes.split("i"); 
//on the basis of i it will split 
// console.log(arrStr);
// let arrStr2=singleQuotes.split(""); 
// console.log(singleQuotes);
//puri string split ho jaegi
// console.log(arrStr2);

//join fxn
//this fxn will apply on array and convert the array into string by adding the deliemeter to 
//each index of the array
// let str= arrStr2.join("$");
// console.log(str);



let string ="   Hello how are you   ";

//trim fxn removes the whitespaces in the starting and of the end
string = string.trim();
console.log(string);

//now split it on the basis of space
let google_show = string.split(" ");
console.log(google_show);

let str2= google_show.join("+");
console.log(str2);