// QUESTION NO. 1
// 1.
// var name =[];
// console.log(name);
// 2
// var age =new Array();
// console.log(age);
// 3
// var food =["pizza","burger","pasta"];
// console.log(food);
// 4
// var numbers =[1,2,3,4,5,6,7,8,9,10];
// console.table(numbers);
// 5
// var checkout =[true,false,true,false];
// console.table(checkout);
// 6
// var mixed =["deciplane",100,"want",90,"days",true];
// console.log(mixed);
// 7
// var qualification =["SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil.", "PhD"]
// document.write(qualification);

// document.write("1) " +  qualification[0] + "</br>");
// document.write("2)"   + qualification[1] + "</br>"  )
// document.write("3)"   + qualification[2] + "</br>" )
// document.write( "4)"   + qualification[3]  + "</br>")
// document.write("5)"    + qualification[4]   +  "</br>")
// document.write("6)"  + qualification[5] +  "</br>"  ) 
// document.write("7)"  + qualification[6]  + "</br>" )
// document.write("8)"   + qualification[7]  + "</br>")

// QUESTION NO. 2
// var students =["hiba", "huma","tania"]
// var scores =[300,200,400]
// var total =[500]

// var percentage1 = (scores[0] / total[0]) * 100
// var percentage2 = (scores[1] / total[0]) * 100
// var percentage3 = (scores[2] / total[0]) * 100

// document.write("scorse " + " of " +  students[0] + " is " + scores[0] + " percentage " +  percentage1  + "</br>")
// document.write("scorse " + " of " +  students[1] + " is " + scores[1] + "    percentage " + percentage2 + "</br>")
// document.write("scorse " + "of " + students[2] + " is " + scores[2] + " percentage " + percentage3 + "</br>")

// QUESTION NO. 3
// var colors =["red","yellow","blue","purple", "orange" , "black",]
// console.table(colors);
// document.write(colors + "</br>");
// // a
// colors.unshift("grey");
// console.log(colors);
// document.write(colors + "</br>")

// b
// colors.push("peach","brown")
// console.log(colors);
// document.write(colors + "</br>")
// c
// colors.unshift("white", "pink")
// console.log(colors);
// document.write(colors  + "</br>");

// d
// colors.shift(1)
// console.log(colors)
// document.write(colors + "</br>") 

// e
// colors.pop()
// console.log(colors)
// document.write(colors + "</br>")

// e
// colors.splice("green", "golden")
// console.log(colors)
// document.write(colors)

// g
// colors.splice(4,3, "dusty")
// console.log(colors)
// document.write(colors  + "</br>")


// QUESTION NO. 4
// var numbers =[320, 230, 480, 120]
// numbers.sort()
// console.log(numbers)
// console.log(numbers.sort())
// document.write(numbers + "</br>")

// QUESTION NO. 4
// var city = ["karachi" ," islamabad", "lahore"," quetta", "peshawer"]
// var copy = city.slice(0,2)
// console.log(copy)
// document.write(copy + "</br>")

// QUESTION NO. 5
// var arr = ["this", "is", "my", "cat"]
// document.write("<h1> Array</h1>")
// document.write(arr + "</br>")
// var arrcombine = arr.join(",")
// console.log(arrcombine)
// document.write(arrcombine)


// QUESTION NO. 6
var devices = []
devices.push("Keyboard")
devices.push( "mouse")
devices.push(" printer")
devices.push("moniter")
console.log(devices)

document.write("out:<br>" + devices.shift() + "<br>")
document.write("out : <br>" + devices.shift() + "<br>")
document.write("out:<br>" + devices.shift() + "<br>")
document.write("out : <br>" + devices.shift() + "<br>")

// QUESTION NO. 8
var devices = []
devices.push("Keyboard")
devices.push( "mouse")
devices.push(" printer")
devices.push("moniter")
document.write("<br>")
console.log(devices)
document.write("out:<br>" + devices.pop() + "<br>")
document.write("out : <br>" + devices.pop() + "<br>")
document.write("out:<br>" + devices.pop() + "<br>")
document.write("out : <br>" + devices.pop() + "<br>")
document.write("<br>")




// QUESTION NO. 8
var phoneManufacturers = ["Apple","Samsung", "Motorola"," Nokia", "Sony" , "Haier"]
document.write("<select>")
document.write("<option> " + "</option>")
document.write("<option> " + phoneManufacturers[0]    + "</option>")
document.write("<Option> " +  phoneManufacturers[1]    +   "</Option>")
document.write("<Option>  " + phoneManufacturers[2]    +     "</Option>")
document.write("<option>  " +  phoneManufacturers[3]    +    "</option>")
document.write("</select>")





