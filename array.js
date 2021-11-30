//array deaclare
//let arr=[];

let array = [1,2,3,4,5];

console.log(array);
// console.log(array.length);

// let i = 0;
// while(i<array.length)
// {
//     console.log("element at indx",i,"is",array[i]);
//     i++;
// }

// push ,unshift
//you can put multiple type of primitive datatypes inside the same array

//push,unshift - for addn
array.push("last value addedd");
array.unshift("first value added");
console.log(array);
console.log("/---/");
//for deletion of elements in javascript

array.shift(); //first value gets deleted
array.pop(); //last value gets deleted
console.log(array);

//start indx , ending idx
//s,e-1 , if you don;t specify ending index it will take on to the end of the array , same for starting index
// if you don't specify it it will take from starting
let PartOfAnArray =array.slice();
console.log(PartOfAnArray);

//original array don't change 
console.log(array);
