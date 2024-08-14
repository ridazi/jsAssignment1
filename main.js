// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// to city of lights”*/
// Q:1 ch :9-10
let  city = prompt("enter the city name");
    if(city =="karachi"){
        alert("welcome to the coding world")
    }
    //Q:2
let  gender = prompt("enter your gender here");
    if(gender =="male"){
        console.log("good morning sir")}

    else if(gender =="female"){
        console.log("good morning mam")}
   //Q:3
   let trafficSignal =prompt("enter the color")
   if(trafficSignal =="red"){
    console.log("must stop")
   }else if(trafficSignal == "yellow"){
    console.log("ready to move")
   }
   else if(trafficSignal == "green"){
    console.log(" move")
   }
//   Q:4
  let fuel = prompt("how much fuel has left inyour car")
  if(fuel >= 0.25 ){
    console.log("Please refill the fuel in your car")
  }
        // Q:5
    let a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");}
     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
     var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
     let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
     if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    
   
    
     if("car" < "cat"){
    alert("car is smaller than cat");
    }
    //Q:7
    let score =83
    let grade
let remarks
    if(score>= 80){
        grade ="A one";
remarks = "excellent"
    }
    else if(score>= 70 ){
        grade ="A";
        remarks ="good"
    }
   else if(score>= 60){
    grade ="B"
remarks = 'you need improvment'}
else if(score = 50){
    grade ="fail"
remarks = 'you need to work heard'}
console.log("according to your score,your grade was:",grade,remarks)
//Q:7
let gameNum = 9;
let num =prompt("guess the secret number. from 1-10");

if(num == gameNum+1){
    console.log("“Close enough to the correct answer”.");

}
else if(num == gameNum){console.log("Bingo! Correct Answer")
}
//Q:8
 let numb = prompt("enter a number")
 if(numb % 3 === 0){
    console.log(numb,"is divisible by 3")
    
 }else{
    console.log(num,"is not divisible by 3")
 }
//  Q:9
 let sums = 123450
 if(sums % 2 ===0){
    console.log(sums,"is an even number")
 }
 else{
    console.log(sums,"is an odd number")
 }
 
//Q:11
function calculator(num1, num2, operation) {
    let result;
    
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            result = "Error: Division by zero";
        } else {
            result = num1 / num2;
        }
    } else if (operation === '%') {
        result = num1 % num2;
    } else {
        result = "Invalid operation";
    }

    return result;
}

// Take input from user
let nu1 = parseFloat(prompt("Enter the first number:"));
let nu2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Compute the result
let result = calculator(nu1, nu2, operation);

// Display the result to the user
alert("The result is: " + result);



//ch 12-13
 //q:1
 function check(input) {
    // Check if input is a number
    if (!isNaN(input)) {
        console.log("The input is a number.");
    }
    // Check if input is an uppercase letter
    else if (input >= 'A' && input <= 'Z') {
        console.log("The input is an uppercase letter.");
    }
    // Check if input is a lowercase letter
    else if (input >= 'a' && input <= 'z') {
        console.log("The input is a lowercase letter.");
    }
    // Input is not a number or letter
    else {
        console.log("The input is not a number or letter.");
    }
}


// q:2

function Integers(num1, num2) {
    if (num1 > num2) {
        console.log("The larger number is: " + num1);
    } else if (num2 > num1) {
        console.log("The larger number is: " + num2);
    } else {
        console.log("Both numbers are equal.");
    }
}


let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));


Integers(num1, num2);

// //Q:3
function cNum(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}


let sum = parseFloat(prompt("Enter a number:"));



// //Q:4 
function isVowel(char) {
   
    char = char.toLowerCase();
    
   
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}


let char = prompt("Enter a single character:");

if (char.length === 1) {
    
    if (isVowel(char)) {
        console.log("The character is a vowel.");
    } else {
        console.log("The character is not a vowel.");
    }
} else {
    console.log("Please enter a single character.");}
    //Q:5
   
const correctPassword = "12345";


let userPassword = prompt("Please enter your password:");


if (userPassword === null || userPassword === "") {
    console.log("Please enter your password.");
} else {
   
    if (userPassword === correctPassword) {
        console.log("Correct password.");
    } else {
        console.log("Incorrect password. The original password was: " + correctPassword);
    }
}
// //Q:6
let greeting;
let hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";}
console.log("greating")
//Q:7
let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    console.log("good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("good afternoon");
} else if (time >= 1700 && time < 2100) {
    let hours = Math.floor((time - 1200) / 100);
    let minutes = time % 100;
    console.log("good evening");
} else {
    console.log("Invalid time.");
}





//ch:14-16
//Q:1
let arry =[]
let arr = [[],[],[]];
let numbe = ["apple","banan","mango"];
let array = [1,2,3,4];
let boolean = [true,true,false];
let education= ["SSC","HSC","BS"];
console.log(education)
// q:8
// Declare and initialize arrays for student names and scores
let Names = ["Michael", "John", "tony"];
let Scores = [320, 230, 480];
let totalMarks = 500;

// Iterate over the students and display their scores and percentages
for (let i = 0; i < Names.length; i++) {
   let Name = Names[i];
    let Score = Scores[i];
   let percentage = (Score / totalMarks) * 100;
    console.log(`Score of ${Name} is ${Score}, percentage ${percentage.toFixed(2)}%`);
}
//Q:10
// Student scores array
let studentScores = [88, 75, 92, 80, 95];

// Sorting the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Displaying the sorted array
console.log("Sorted Scores:", studentScores);
// Q:11
 let cityList =["karechi","Lahoure","Queeta","peshwer"]
 let selectedCity = []
 selectedCity = cityList.slice(0,3);
 console.log("selectedCity:",selectedCity)
//  Q:12

let givenArray = [" this ", "is","my","cat"];


let String = givenArray.join("");


console.log(" String:", String);




//ARRAYS AND LOOP
//ch 17-20
//Q:1

let multiArray = [];


multiArray.push([]);
multiArray.push([]);
multiArray[0].push(1, 2, 3);
multiArray[1].push(4, 5, 6);


console.log("Multidimensional Array:", multiArray)
// // Q:2
let matrix = [
    [1 , 2, 3,],
    [1 , 2, 3,],
    [1 , 2, 3,]
]
console.log("the matrix is :", matrix)
// //Q:3

for (let i = 1; i<=10; i++){
    console.log(i)
}
// //Q:4
let tableNumber = parseInt(prompt("Enter the table number:"));


let tableLength = parseInt(prompt("Enter the length of the table:"));


console.log("Multiplication Table for", tableNumber, "up to", tableLength, "terms:");

for (let i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}
// // Q:5


let list = ["apple", "banana", "orange", "grape", "mango"];


console.log("Items of the list:");

for (let i = 0; i < list.length; i++) {

    console.log("index" + ":",list[i]);
}
// //Q:6(a)
for (let i = 1; i<=15; i++){
    console.log(i)
}
// //Q:6(b)
for (let i = 15; i>=0; i--){
    console.log(i )
}
// //Q:6(c)
for (let i = 0; i<=20; i+= 2){
    console.log(i )}
    //Q:6(d)
for (let i = 1; i<=20; i+= 2){
    console.log(i )}
//     //Q:7
   
let fruits = ["apple", "banana", "orange", "grape", "mango"];

let userInput = prompt("Enter a fruit to search:");


let found = false;


for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === userInput) {
        found = true;
        break;
    }
}


if (found) {
    console.log(userInput + " is found in the list.");
} else {
    console.log(userInput + " is not found in the list.");
}
//Q:8
function LargestNumber(array) {
    
    let largest = array[0];

   
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    
    return largest;
}


let numbers = [10, 5, 20, 15, 8, 25];


let largestNumber = LargestNumber(numbers);
//Q:9
function smallestNumber(array) {

    if (array.length === 0) {
        return "Array is empty";
    }

   let smallestNumber = array[0];

  
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }

    return smallestNumber;
}

let number = [24, 53, 78, 91, 37];
console.log("Smallest number in the array:", smallestNumber(number));


console.log("The largest number in the array is:", largestNumber);


// ch21-25
// Q:1

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");


let fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + "! Welcome.");
//Q:2
let favoriteModel = prompt("Enter your favorite mobile phone model:");


let inputLength = favoriteModel.length;


document.write("Length of your favorite mobile phone model is: " + inputLength);
// Q:3
let word = "Pakistani";


let indexOf = word.indexOf('n');


document.write("The index of 'n' in the word 'Pakistani' is: " + indexOf);
//Q:4
let words = "Hyderabad";


let newWord = words.replace("Hyder", "Islami");


document.write("After replacing 'Hyder' with 'Islami': " + newWord);