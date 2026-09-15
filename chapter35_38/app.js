//QUESTION NO 1
// var currentdate = new Date()
// document.write(currentdate)

//QUESTION NO 2
// var firstname = prompt("enter your first name")
// var secondname = prompt("enter the second name")

// var fullname =  firstname + secondname;
// document.write("welcome " + fullname)



//QUESTION NO 3
// var inputone = Number(prompt("enter first number"))
// var inputtwo = Number(prompt("enter second number"))
// var sum = inputone + inputtwo;
// document.write("sum of thes two numbers is " + sum + "<br>")

//QUESTION NO 4

// function claculator(num1 , num2 , operator){
//             var result;

// if ( operator == "+"){
//     result = num1 + num2
// }
// else if (operator == "-"){
//     result = num1 - num2
// }
// else if ( operator == "*"){
//     result = num1 * num2
// }
// else if( operator == "/"){
//     result = num1 / num2
// }
// else if ( operator == "%"){
//     result = num1 % num2
// }
// else{
//     result = "invalid operator"
// }

// return result;

// }
// var result = claculator(10, 5 ,"+")
// document.write("Result " + result )

//QUESTION NO 5

// function square(num) {
//    var  result =  num * num

//    return result
    
// }
// var result = square(5)

// console.log(result)


//QUESTION NO 6
// function factorial(num){
//     var result = 1
    
//     for(var i = num; i >= 1; i--){
//       result =  result * i;
//     }

//     return result
// } 

// var output = factorial(5)

// document.write(output)



//QUESTION NO 7
// function numbers(num,num1){
//     for(var i = num; i <= num1; i++){
//         document.write(i +  "<br>")
//     }

  
// }
// numbers(1,90)

//QUESTION NO 8
// function hypoteniouscalcu(base,prependicular) {

//     function squarecalcu(num){
//         return num * num
//     }

//     var basesqr = squarecalcu(base)
//     var prepensqr = squarecalcu(prependicular)
    

//     var hypotenious = Math.sqrt(basesqr + prepensqr)
//     return hypotenious
// }
// var result = hypoteniouscalcu(3,4)
// document.write(result)


//QUESTION NO 9

// function area(width,height){
//     var result = width * height
//     return result

// }
// var result = area(4,6)
// document.write(result)

//QUESTION NO 10
// function palindrom(string) {
//     reversestring = string.split('').reverse().join('')
    
//     if(string == reversestring){
//         return true
//     }else{
//         return false
//     }
// }
// var output = palindrom("madam")
// document.write(output)

//QUESTION NO 11
// var example = "the quick brown fox"
// function capatalize(string) {

// var word = string.split(' ');

// for ( var i = 0; i < word.length; i++){
//    word[i] = word[i][0].toUpperCase() + word[i].slice(1)



// }
// return word.join(' ')
    
// }
// var result = capatalize("the quick brown fox")

// document.write("EXAMPLE STRING :" + example + "<br>");
// document.write("EXPECTED OUTPUT " + result)

//QUESTION NO 12
// var example = "Web Development Tutorial"
// function searchlongestword(string){
//     var word = string.split(' ')

//     var logestwrd = ""
//     for(var i = 0; i <word.length; i++){
//         if (word[i].length > logestwrd.length){
//                logestwrd = word[i]
//         }
//     }
//     return logestwrd
// }
// var output = searchlongestword("Web Development Tutorial")
// document.write("EXAMPLE STRING " + example + "<br>")
// document.write("EXPECTED OUTPUT " + output) 

//QUESTION NO 13
// function accurance(string,letter){
//     count = 0;

//     for(var i = 0; i < string.length; i++){

//         if(string[i] == letter){
//             count++;
//         }
//     }
//     return count;
// }
// var result =  accurance("JSResourceS.com", "o")
// document.write(result)

//QUESTION NO 14
// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
//     document.write("the circumferece is " + circumference.toFixed(2) +  "<br>")

// }
// function  circlearea(radius){
//     var area  = Math.PI * radius * radius;
//     document.write("the area is " + area + "<br>")
// }
// calcCircumference(5)
// circlearea(5)