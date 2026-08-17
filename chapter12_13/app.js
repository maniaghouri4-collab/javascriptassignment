// QUESTION NO 1
// var input = prompt("enter  any  number  or   letter" )
// var  asciicode =  input.charCodeAt(0);

// if( asciicode >= 48  &&  asciicode <= 57){
//     document.write("input: <br>"  + input +  "<br>" + "it is a number")
// }
// else if ( asciicode >= 65 && asciicode <= 90){
//     document.write("input: <br>"  + input + "<br>"  + "it is capital  letter")
// }
// else if (asciicode   >=97 && asciicode<=122){
//     document.write("input: <br>" + input + "<br>" + "it is lowercase letter")
// }
// else{
//     document.write("input : <br>" + input +  "<br>" + "any special symbol")
// }

// QUESTION NO 2
// var num1 = +prompt("enter first  integers")
// var num2 = +prompt("enter second integer")

// if ( num1 > num2){
//     document.write("given number"  +  "<br>"   + num1 +  "<br>"    +   "is  greater the  second integers")
// }
// else if (num2 > num1){
//     document.write("given number " +  "<br>"    + num2 +     "<br>"  + "is greater  then first  integers")
// }
// else{
//     document.write("both numbers re equal")
// }

// QUESTION NO 3
// var input = +prompt("input your number")

// if (input > 0){
//     document.write("this number"  +  "<br>"     + input +    "<br>"    +    "is positive" )
// }
// else if(input < 0){
//     document.write("this number "  +  "<br>" + input       +      "<br>"    + "is negative")
//  }
//  else{
//     document.write("the number is zero")
//  }

// QUESTION NO 4
// var alphebats = prompt("enter any  alphebat")
// var lower = alphebats.toLowerCase()
// if (lower === "a" || lower === "e" || lower === "i" || lower === "o"|| lower === "u"){
//     document.write("true")
// }
// else{
//     document.write(false)
// }


// QUESTION NO 5
// a
// var password = "maniaghouri1234";
// b
// var passwordask = prompt("enter your password");
// c
// if (!passwordask) {
//     document.write("please enter your password");
// }
// else if (passwordask === password) {
//  document.write("your password is correct");
// }
// else {
//     document.write("your password is incorrect");
// }

// QUESTION NO 6
// var greetings = +prompt("what time is giong on?")
// var hour = 13;
// if (hour < 18){
//     document.write("goog morning")
// }
// else {
//     document.write("good evening")
// }

// QUESTION NO 7
var time = +prompt("Time enter karein (24-hour format mein, e.g., 1900):");
if (time >= 0000 && time < 1200) {
    document.write("Good morning!");
} 
else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
} 
else if (time >= 1700 && time < 2100) {
    document.write("Good evening!");
} 
else if (time >= 2100 && time <= 2359) {
    document.write("Good night!");
} 
else {
    document.write("Invalid time format! Please enter time between 0000 and 2359.");
}
// rough
// var time = +prompt("enter  the  time")
// if (time >= 0000 && time <= 1200){
//     document.write("good morning")
// }
// else if(time >=1200  && time <1700){
//     document.write("good afternoon")
// }
// else if(time >=1700 && time <= 2100){
//     document.write("good evening")
// }
// else if(time >= 2100 && time <=2359){
//     document.write("good  night")
// }