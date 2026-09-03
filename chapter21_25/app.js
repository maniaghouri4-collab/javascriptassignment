// question no  1
// var firstName = prompt("enter  your  first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// alert (" hello " + fullName + " !welcome. ")

// question no  2
// var  input = prompt("enter  your  favourite mobile phone model");
// var examine = input.length;
// document.write("my favourite phone is: " + input + "<br>");
// document.write("length of string:" + examine + "<br>");


// question no  3
// var country = "pakistan"
// var counter = country.indexOf("n");
// document.write("string: " + country + "<br>");
// document.write("index of 'n' is : " + counter + "<br>");


// question no  4
// var message = "hello world";
// var check = message.lastIndexOf("l");
// document.write("string:" + message + "<br>");
// document.write("last indexof 'l' is : " + check + "<br>" );

// question no 5
// var word = "pakistani"
// var changes = word.charAt(3);
// document.write("string:" + word + "<br>");
// document.write("character at index 3 is : " + changes + "<br>" );

// question no  6
// var firstName =  prompt("enter  your  first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// alert("hello " + fullName + "! welcome."  );

// question no  7
// var name = "hyderabad";
// var change = name.replace("hyder","islam");
// document.write("city: " + name + "<br>");
// document.write("after replacement: " + change + "<br>")

// question no  8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var change = message.replaceAll("and", " & ");
// document.write("before replacement: " + message + "<br>");
// document.write("after replacement: " + change + "<br>");


// question no  9
// var strng = "472";
// var convert = parseInt(strng);
// document.write("value:" + strng + "<br>");
// document.write("type:" + typeof strng + "<br>");
// document.write("value:" + convert + "<br>" );
// document.write("type:" + typeof convert + "<br>");

// question no  10

// var input = prompt("enter any text");
// var convert = input.toUpperCase();
// document.write("user input:" + input + "<br>");
// document.write("uppercase:" + convert + "<br>")

// question no  11
// var input = prompt("enter any text");
// var convert = input.toLocaleLowerCase().split(" ");

// for (var i = 0 ; i <convert.length; i++){
//     convert[i] = convert[i].charAt(0).toUpperCase() + convert[i].slice(1);

// }

// var titlecase = convert.join("");
// document.write("user input  " + input + "<br>" )
// document.write("tittlecase  " + titlecase + "<br>")

// question no  12
// var number = 35.36;
// var convert = number.toString();
// var change = convert.replace(".","")

// document.write("number: " + number + "<br>");
// document.write("result: " + change + "<br>");

// question no  13
// var input = prompt("enter user  name ");
// var flag = true;
//  for ( var i = 0; i < input.length; i++){
//     code = input.charCodeAt(i);
//     if( code === 33 ||   code === 44  || code === 46   || code ===64)
//         flag = false; 
//     break;

//  }
//  if (flag === false){
//     alert ("plaese enter a valid username without specials characters like !, # , @, .");
//  }
//  else {
//     document.write(input + "is a  valid username");
//  }

 // question no  14
//  var items = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var input = prompt("welcome  to our bakery what do you want  to  eat sir?");
//  var flag = false;
//  var index;

//  for ( var i = 0; i < items.length; i++){
//     if( items[i].toLowerCase( ) === input.toLowerCase()){
//         flag = true;
//         index = i;
//         break;
//     }
//  }
//  if (flag == true){
//   document.write(input + " is available in at index " + index +" in our bakery")
//  }
//  else{
//     document.write("we are sorry " + input + " is not avaialbale  in our  bakery")
//  }

// question no  15
// var password = prompt("enter your password");
// var examine = password.length >= 6;
// var convert = password.charCodeAt(0);
// var rule = !(convert >= 48  && convert <= 57);

// var alphebats = false;
// var number = false;

// for( var i = 0; i<= password.length; i++){
//     code = password.charCodeAt(i)
//     if( code >= 65 && code <= 90 || code >= 97 && code<= 122){
//         alphebats = true;
//     }
//     if( code >= 48 && code <=57){
//         number = true;
//     }
// }
// if ( examine && rule && alphebats && number){
//        document.write("password is valid")
// }
// else{

//     alert("Please enter a valid password that:\n- Contains both alphabets and numbers\n- Does not start with a number\n- Is at least 6 characters long");
// }


 // question no  16
//  var university = "university of karachi";

//  var piece = university.split("");
//  for( var i = 0; i < university.length; i++){
//     document.write(piece[i] + "<br>")
//  }

 // question no  17
// var country = "pakistan";
// var convert = country.charAt(country.length -1);
// document.write("user input " + country + "<br>");
// document.write("last character of input is : " + convert + "<br>")


 // question no  18
//  var message = "The quick brown fox jumps over the lazy dog";
//  var convert = message.toLowerCase().split(" ");
//  var count = 0;

//  for ( var i = 0; i < convert.length; i++){
//     if( convert[i] == "the"){
//         count ++;
//     }
//  }

//  document.write("text: " + message + "<br>");
//  document.write("there are " + count + " accurenc(s) of word 'the' ")

 