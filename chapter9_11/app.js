// // QUESTION NO 1
// var city = prompt("Enter your city name: ");
// if (city == "karachi") {
//     alert("welcome to the  city of light");
// }
// else{
//     alert("welocome")
// }

// // QUESTION NO 2
// var gender = prompt ("what is your gender?");
// if (gender == "male"){
//     alert("good  morning sir")
// }
// else {
//     alert("good  morning mam")
// }

// QUESTION NO 3
// 
// var color = prompt("Enter the color of traffic signal: ");
// if (color == "red") {
//     alert("must stop");
// }
// else if (color == "yellow") {
//     alert("ready to move");
// }
// else {
//     alert("move now");
// }

// QUESTION NO 4
// var fuel = prompt ("enter the remaining fuel in your car (in liters): ");
// if (fuel<0.25) {
//     alert(" “Please refill the fuel in your car")
// }

// QUESTION NO 5
// A
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// B
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is false");
// }
// C
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is false");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is false");
// }
// if(c === 14){
// alert("condition 4 is true")
// }
// D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// E
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// F
// if("car" < "cat"){
// alert("cat is smaller than car");}

// QUESTION NO 6
// var sub1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var sub2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var sub3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = parseFloat(prompt("Enter Total Marks:"));
// 2. Calculations
// var totalObtained = sub1 + sub2 + sub3;
// var percentage = (totalObtained / totalMarks) * 100;
// 3. Compute Grade and Remarks as per image table
// var grade = "";
// var remarks = "";
// result
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// 4. Output Display on Web Page
// document.write("<h1>Marks Sheet</h1>");
// document.write("<p><b>Total marks :</b> " + totalMarks + "</p>");
// document.write("<p><b>Marks obtained :</b> " + totalObtained + "</p>");
// document.write("<p><b>Percentage :</b> " + percentage.toFixed(2) + "%</p>");
// document.write("<p><b>Grade :</b> " + grade + "</p>");
// document.write("<p><b>Remarks :</b> " + remarks + "</p>");


// QUESTION NO 7
// var secretNumber = 7;
// var guessnumber = +prompt("guess the sectret number between 1 to 10");
// if (guessnumber == secretNumber) {
//     alert("Bingo! correct answer");
// }
// else if (guessnumber +1 == secretNumber) {
//     alert("“Close enough to the correct answer”.");
// }
// else{
//     alert("Try again!");
// }

// QUESTION NO 8
// var number = +prompt("Enter a number to check if it is divisible by 3:");
// if (number %3 == 0) {
//     alert(number + "is divisibel by zero");
// }
// else{
//     alert(number + " is not dividible by zero");
// }

// QUESTION NO 9
// var number = +prompt("enter a number to recognize if it is even or odd");
// if(number %2 == 0){
//     alert(number + "is even number");
// }
// else {
//     alert(number + "is odd number");
// }

// QUESTION NO 10
// var temperature = +prompt("Enter the temperature in Celsius: ");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// }
// else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }
// else {
//     alert("not available");
// }

// QUESTION NO 11
var firstnumber = prompt("enter the first   number ");
var secondnumber = +prompt("enter the seconed number");

var operation = +prompt("enter the operation you want to perfornm (+, -, *, /, %)");
var result;
if (operation == "+"){
    result = firstnumber + secondnumber;
    alert(firstnumber + "+" + secondnumber + "=" + result);
}
else if (operation == "-"){
    result = firstnumber - secondnumber;
    alert(firstnumber + "-" + seconednumber + "= " + result);
}
else if (operation == "%") {
 if (secondnumber !== "0") {
    result  = firstnumber % secondnumber;
    alert(firstnumber + "%" + seconednumber + "=" + result);}
    else{
        alert("division by zero is not possible");
    }
}
else if( operation == "*"){
    result = firstnumber * secondnumber;
    alert(firstnumber + "*" + seconednumber + "=" + result);
}
else {
    alert("Invalid operation! Please enter one of (+, -, *, /, %).");
}

