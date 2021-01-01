//***** DOM Manipulation *******
console.log("hello");
// alert("hello");

// Variables 
var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

// basicaly doing gui development with this changing of text and color
// document.getElementById("someText").innerHTML = "Wats up";
// document.getElementById("someText").style.color = "red";

// can do a lot of things like 
// ask the user what is their age?
// and when the user types in their age you 
// can store that somewhere 

// this prompt makes a alert pop up 
// that says what is your age and you 
// can type in the input field
// prompt("What is your age?")

// data types boolean, array, variables, or an object, or a function 
// now lets store in a variable
// var age = prompt("What is your age.");
// whatever age i get back i want to add that age to the html and
// let main page read out our current age.
// document.getElementById('someText').innerHTML = age;
// document.getElementById('someText').style.color = "blue" ;

// console.log(age);

// how to Deal with Numbers in Javascript
var num1 = 5.7;
// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, Multiply *, remainder % mod symbol 

console.log(num1);
console.log(5 * 10);
console.log(50 % 5); //remainder 0
console.log(50 / 5); // divided by 5 = 10
console.log(num1 % 5)

// Increment/ decrement by any number you want ex +=1=
num1 += 10
console.log(num1);

/* Functions in Javascript with multiple arguments
1. Create a function
2. call the function fun(); function blah(){} blah()< --- here is calling it or invoking it
*/

// Create the function 
// fat arrow function 
fun = () => {
    console.log("im having fun");
}
// calling the function 
fun();

function funTwo() {
    console.log("regular fun style function ");
}
// calling the function
funTwo()

/* the idea behind a function is it should do multiple names
lets create a function that should take in a name 
and says hellow followed by your name.

for example
Name: "Channee"
Return: "Hello Channee"
*/
// will say that greeting will take in yourName
function greeting(yourName) {
    let result = "hello " + yourName;
    document.getElementById("someText").innerHTML = result;
    document.getElementById("someText").style.color = "lightblue"
    console.log(result);
}
// we take in the name and pass it into greeting
// let name = prompt("What is your name?");
// took in the name as input and yourName inside the greeting function
// becomes the name
// Note if a function is depandant on a piece of information
// to write clean code make sure you add that in there

// greeting(name);
// console.log(name)

// String Concatenation 'Hello' + ' ' + name;
// function can also take in arguments
// How do arguments work in function?
// the variable name is our input
// our function should be taking in our input

// side how do we add 2 numbers in a function ?
function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
// call th function and give it the 2 arguments
sumNumbers(2, 5);
sumNumbers("hello ", "channee"); //the function still is combining

// While vs For Loops 
// what if things have to be done mutliple times
// While loops

var num = 0;
while (num < 100) {
    num += 1;
    // prints out all the way from 1 to 100 and stops doesnt count zero
    // only thing wrong about a while loop is that it can potentially run long
    // make sure to have a break. 
    // if you never say you increment by +=1 i will run forever
    console.log(num);
}

// for loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types 
var yourAge = 18; // number data type
let yourName = "Bob"; // string data type
let name = { first: "Stacy", last: "Sok" }; // object another language can be called a list key: "value" pair
// console.log(name.last)
let truth = false; // boolean
let groceries = ["banana", "oranges", "poop"] // array this is a list in python
let random; // undfined if you check the type
let nothing = null; // value null 

/* Strings Common Methods Javascript

.length gives the length 
.indexOf gives the index of a something
.slice() it includes the index and up to fruit.slice(2, 4) 2 to 4
.replace() this is for whenever we find for ex .replace("ban", "123")
 meaning whenever we find "ban" replace it with "123" logging 123ana
.toUpperCase() makes all letters uppercase
.toLowerCase() makes all letters lowercase
.charAt(1) gives the chracter index same as fruit[1]
.split("") splitting on every single character in the form of an array
 */
let fruit = "Mango";
/* scaping a line \n
this variable moreFruits will show
banana
apple 
*/

let shiet = "storm bolt, ass, goblin, uppercut "

let moreFruits = "banana\napple";
console.log(moreFruits)
// getting the length of the fruits
// .length()
console.log(fruit.length); // shows length of 5 doesnt not count form zero
// look for things inside of a string
// this is for when something can be found or what its index is search bar?
// .indexOf()
console.log(fruit.indexOf("g")); // index 3 of Mango
// .indexOf()
console.log(fruit.indexOf("an")); // starts finding index at 2 of Mango
// .slice()
console.log(fruit.slice(2)); //Mango starts in index 2 and takes the rest of it logs ngo
console.log(fruit.slice(2, 4)); // logs ng it starts on index 2 but goes up to 4 but doesnt take the 4th index
console.log(fruit.replace("Man", "cris")); // this goes wherever this finds "Man" replace it with "cris"
console.log(fruit.toUpperCase()); // logs MANGO
console.log(fruit.toLowerCase()); // logs mango
// get character of a string given the index
console.log(fruit[0]); //loggs M
// fruit = fruit[0].toLowerCase(); //loggs M from mango to m
// console.log(fruit);
// using charAt to get index
console.log(fruit.charAt(2)); //gives logg showing n
// splitting a string on a comma 
console.log(fruit.split("")); //logs [ 'M', 'a', 'n', 'g', 'o' ] turning into an array
console.log(shiet.split(",")) // splitting on the comma [ 'storm bolt', ' ass', ' goblin', ' uppercut ' ]

// ***** Javascript Arrays another a data type ******

let fruits = ["croaych chumah", "ahluk", "mien", "muhkah", "durain"];
// another way to make an array
// this is just the declaration
// cant say let twice since i already delcared it uptop so drop the let on the bottom
// let fruits = new Array ("croaych chumah", "ahluk", "mien", "muhkah", "durain");
fruits = new Array("croaych chumah", "ahluk", "mien", "muhkah", "durain");
// start getting the value of this array
console.log(fruits[1]); //this is how you access values at index 1
// changing the value
fruits[1] = "Lahoang";
console.log(fruits) // [ 'croaych chumah', 'Lahoang', 'mien', 'muhkah', 'durain' ]
//something common you do with an array is looping through them
// i is the index and keep incrementing the index
// goes through the array of fruits and printed out one item at a time
for (let i = 0; i < fruits.length; i++) {
    // console.log fruits[i]
    console.log(fruits[i])
}

/* *** array common methods ***
.toString() turns into a string
.join()
.pop() can pop the last item
*/
// convert it to a string and turn it into an oppisite of what a functionality is
console.log("to string: " + fruits.toString()); //to string: croaych chumah,Lahoang,mien,muhkah,durain
// this takes an array and joins it with dashes - or stars *
console.log("this is joining: " + fruits.join(" - ")); // this is joinging: croaych chumah - Lahoang - mien - muhkah - durain
// using .pop to pop the last element
console.log("pop the last item: " + fruits.pop()); // pop the last item: durain
console.log(fruits, fruits.pop(), fruits);
// using .push() method 
console.log(fruits.push("gadoy"), fruits); // 4 [ 'croaych chumah', 'Lahoang', 'mien', 'gadoy' ]
console.log(fruits.push("butt")); // logs 5
console.log(fruits); // now shows [ 'croaych chumah', 'Lahoang', 'mien', 'butt' ]
console.log(fruits[3]); // logs gadoy
// adding a new item does the same as push
fruits[6] = "new fruit"; // added a "new fruit" item
console.log(fruits);
// opposite of pop .shift() removes the first element
// not really something you should do
fruits.shift();
console.log(fruits);
// using .unshift("")
fruits.unshift("kudaw"); // add first element to an array 
console.log(fruits); // ['kudaw','Lahoang','mien','gadoy','butt',<1 empty item>,'new fruit']
// lets say you have 2 arrays one called fruits and vegetables and want to combine
let veggies = ["potato", "carrots", "lettuce"];
// combining making a new variable allGroceries and = fruits.concat using concat to bring all the items together and putting in veggies
let allGroceries = fruits.concat(veggies);
console.log(allGroceries);
// slicing an array .slice()
console.log(allGroceries.slice(1, 4)); //slice from 1 through 4 including 1 and up to 4
// reversing an array .reverse() getting the vegetables first
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
// using .sort() to sort numbers in an array
// ascending order
let someNumbers = [5, 10, 2, 4, 20, 21, 8, 9, 7, 6, 1, 334, 23]
console.log(someNumbers.sort(function (a, b) {
    return a - b
}));
// descending order
console.log(someNumbers.sort(function (a, b) {
    return b - a
}));

// write loops and add things to an array 
// let emptyArray = []
//start with an empty array
//  or this way is fine too
// so i have an empty array that i loop through and
// i keep appending number
// loop from 0 up intill 9 and keep pushing those numbers to this array
let emptyArray = new Array();
// write a forloop that adds things to this array
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// if want to include the 10
let emptyArr = [];
for (let num = 0; num <= 10; num++) {
    emptyArr.push(num);
}
console.log(emptyArr); // [  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ojects in javascript
// dictionaries in python

let student = {
    first: "Channee",
    math: "Math",
    DOB: "03/17/1985",
    hobbies: {
        videoGames: ["dota2", "street fighter"],
        cars: ["Lambo", "type R"],
        hangingOut: ["wife", "sons"]
    },
    loves: {
        animals: ["Fat Cats", "Penguin"],
        family: ["Wife Chanthy", "Son Kim", "Son Hanzo",],
    }

};

console.log(student); //logging out student object 
console.log(student.hobbies.videoGames[1]); // logging out going to students then going into the object and into hobbies and hobbies printing out the 1 index of video games
console.log(student.loves.family); //going into student object and heading into love and printing out family array in love

let person = {
    first: "Joe",
    last: "Dirt",
    age: 42,
    height: {
        feet: 5,
        inch: 6
    },
    // object orieted programming oop
    // creating function that reads info about person
    personInfo: function () {
        return this.first + "\n" + this.last +
            " is " + this.height.feet + " feet " +
            "and " + this.height.inch + " inches.";
    }
};
console.log(person.personInfo())
console.log(person);
console.log(person.height);
// changing first name 
person.first = "Bobby"
console.log(person);

// javascript Conditionals and controls flow (if else) statements
// 18 - 35 target demographic 
// write a line of code that states this idea 
// const age = [5, 6 ,8 , 9, 16, 18, 22, 25, 29, 31, 32, 34, 35, 36, 39, 42]
// tutorial uses a prompt 
// prompt("what is your age?") will alert and ask the user to input the age but nothing will happen only an error
// set prompt to a variable let age = prompt("...")
// let age = prompt("What is your age?")
// if ((age >= 18) && (age <= 35)) {
//     status = "target demo";
//     console.log(age + " " + status);

// } else {
//     status = "not my audience";
//     console.log(age + " " + status);

// }

let targetAge = [17, 18, 19, 20, 25, 32, 35, 40, 37]

function demographic() {
    for (let i = 0; i < targetAge.length; i++) {
        // console.log(targetAge[i]) I logged targetAge[i] to see if the for loop ran through the array of numebrs and it did
        if (targetAge[i] <= 17) {
            console.log(targetAge[i] + " is not my demographic");
        } else if (targetAge[i] >= 18 && targetAge[i] <= 35) {
            console.log(targetAge[i] + " this is my target demographic");
        } else {
            console.log(targetAge[i] + " is the age group that is out of my targeted demographic");;
        }
    }
    return
};

demographic()
// creating an array
const superSayen = ["Goku", "Blade", "Vegeta", "Joe Dirt"]
// looping through the array for(let i = 0; i < array.length; i++) { if ...}
isSuper = () => {
    for (let i = 0; i < superSayen.length; i++) {
        // console.log(superSayen[i]); //for loop iterates through the superSayen array and prints out the names
        if ((superSayen[i] === superSayen[0]) && (superSayen[i] === superSayen[2])) {
            console.log(superSayen[i] + " is part of the Super Sayen bloodline.");
        } else if (superSayen[i] === superSayen[0]) {
            console.log(superSayen[i] + "\'s power level is over 9000!!!");
        } else if (superSayen[i] === superSayen[2]) {
            console.log(superSayen[i] + " is the rightfull Sayen Prince!");
        } else if (superSayen[i] === superSayen[1] && superSayen[i] === superSayen[3]) {
            console.log(superSayen[i] + " is not part of the Dragon ball universe.");
        } else if (superSayen[i] === superSayen[1]) {
            console.log(superSayen[i] + " is a vampire Slayer.");
        } else if (superSayen[i] === superSayen[3]) {
            console.log(superSayen[i] + " is just a a hill billy");
        } else {
            return;
        }
    }
};

isSuper();

// switch statements
// how do we differntiate between weekday and weekends
// 0 is sunday
// 6 is saturday
// 4 is thursday is a "weekday"
switch (3) {
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        // default is like the else
        // you dont want it to go through all the cases because it will always default to weekday
        // so use break statement to break out of loop
        break;
    default:
        text = "weekday";
}
console.log(text);