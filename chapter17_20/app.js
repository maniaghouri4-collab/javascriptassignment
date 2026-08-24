// QUESTION  NO  1
var multidimensionaarray = [[],[]];
// QUESTION  NO  2
// var number =  [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(number[0] + "<br>")
// document.write(number[1] + "<br>")


// QUESTION  NO  3
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < numbers.length; i++){
//     document.write(numbers[i] + "<br>")
// }

// QUESTION  NO  4

// var tableNumber = Number(prompt("Enter a number to print its multiplication table:"));
// var tableLength = Number(prompt("Enter length of multiplication table:"));
// document.write("Multiplication table of " + tableNumber + "<br>");
// document.write("Length " + tableLength + "<br>");
// for (var i = 1; i <= tableLength; i++) {
//   document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

//QUESTION  NO  5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("element at  index 0 is " + fruits[0] + "<br>");
// document.write("element at  index 1 is " + fruits[1] + "<br>");
// document.write("element at  index 2 is " +  fruits[2]+ "<br>");
// document.write("element at  index 2 is " + fruits[3]+ "<br>");
// document.write("element at  index 2 is " + fruits[4]+ "<br>");


// QUESTION  NO  6
// A
// document.write("<b>counting:</b>"+ "<br>")
// for (var i = 1; i <=15; i++){
//     document.write(i + ", " + "<br>")

// }
// document.write(<br></br>)
// B
// document.write("<b>Reverse counting:</b><br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", " + "<br>");
// }
// C
// document.write("<b>Even:</b><br>");
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ", " + "<br>");
// }
// D
// document.write("<b>odd:</b><br>");
// for ( i = 0; i <= 19; i = i + 3){
//     document.write(i + "," + "<br>")
// }
// E
//var thousand = [ "2k", "4k", "6k", "8k", "10k"," 12k", "14k", "16k", "18k", "20k"]
// document.write("<b>series:<b><br>");
// for (i = 0; i <= 20; i = i + 2){
//     document.write(i + "k" + "<br>")
// }


// QUESTION  NO  7
// var items = ["cake"," apple pie", "cookie"," chips"," patties"]
// var  input = prompt("zahid bakers ! what  do you  want  to eat  sir?");
// var searchitems = input.toLocaleLowerCase();

// var  flag = false;
// for ( i = 0; i < items.length; i++){
//     if(items[i] == searchitems ){
//         flag = true;
//         break
//     }
// }
// if (flag == true) {
//     document.write("this items  is  available")
// }
// else{
//     document.write("this item  are  out of  stock")
// }


// QUESTION  NO  8
// var numbers = [24, 53, 78, 91, 12];
// var  input  = +prompt("enter the  numbers");
// flag = false;
// for ( i = 0; i < numbers.length; i++){
//     if( numbers[3] == input ){
//         flag = true;
//         break;
//     }
    
// }
// if (flag == true){
//     document.write(input + " is  the  biiggest  number ")
// }
// else{
//     document.write(input  + " is  not  available ")
// }


// QUESTION  NO  9
// var  numbers = [24, 53, 78, 91, 12];
// var input = +prompt("enter  the  number");
// var correction = input.tolowercase;
// var flag = false;
// for ( i = 0; i < numbers.length; i++){
//     if (numbers[4] == input){
//         flag = true;
//         break;
//     }
// }
// if (flag == true){
//     document.write(input + " is  the  smallest  number")
// }
// else{
//     document.write(input + " is  not  the  smallest one")
// }      


// QUESTION  NO  10
// for ( i = 5; i <= 100; i = i+5){
//     document.write(i + " , " + " <br>")
// }

// another  way 
// for ( i = 1; i <= 100; i++){
//     if ( i % 5 === 0){
//         document.write( i + ",")
//     }
// }