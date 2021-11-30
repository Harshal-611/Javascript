//objects -> (python->dictonary) ,(java->hashmap),(c++ -map)
//object -> a group of key:value pair

//key : value ->property (key ke samn value padi hai to usse property bolte hai)
//key : function->method  ( || )

//cap is an object
//address is a key in which nested key value pairs are there
//comma lgak dusrii key likhte hai
//object ke andar fxn bhi dal skte ho

let cap=
{
    name:"steve", //key ke sath mai koe value padi hai to we called it property , steve is a property
    lastname :"Rogers" ,
  address:
{
    city:"mahannhaton",
    state:"new york" ,
}
, age : 35 ,
isAvenger :true ,
movies : ["First Avenger ","Second Avenger","Civil War"],
sayHi : function() //no need to give fxn name as it is identify by its key
//key ke samn fxn hai , here the value is called method
{
    console.log("Cap say'S hI");
    //return "inside";
}

};

//get

// console.log(cap.name);
// console.log(cap.address);
// console.log(cap.address.city);
// console.log(cap.address.state);
// cap.sayHi();
// console.log(cap.sayHi());

//update

// console.log("cap :" , cap);
// cap.age=36;
// cap.isAvenger=false;
// cap.friends=["Tony","Bruce","Peter"];

// console.log('""""""""""""');
// console.log("cap :",cap);

// hereyou can print direct objects

//delete a key in a object;
//it will delete key address

// delete cap.address;


//for in loop , ek ek karke sari keys access krni hai to
//square bracket key is another value to get key values
let propkey = "age";
console.log(cap[propkey]);
console.log(cap["age"]);
console.log(cap.age);
//these all the three lines are same  
// . operator direct value man leta hai means cap.age ko 35 man lega direct hi bt square bracket
//vo key search krega object mai present hai ya ni age hai to value de dega
for(let key in cap) 
{
    console.log(key," : ",cap[key]);
}

// console.log(cap[lastname]);


//if values of key are not present
console.log(cap["give"]);
console.log(cap.give);

//output - undefined

