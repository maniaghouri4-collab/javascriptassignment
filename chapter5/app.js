// QUESTION NO 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// QUESTION NO 2
// A
var num1 = 3;
var num2 = 5;
var sub = num1 - num2 

document.write("subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>")
// B
var num1 = 3;
var num2 = 5;
var multiply = num1 * num2 

document.write("multiplication of " + num1 + " and "  + num2 + " is " + multiply + "<br>")

// C
var num1 = 3;
var num2 = 5;
var Division = num1 % num2

document.write("division of " + num1 + " and " + num2 + " is " + Division + "<br>")

// QUESTION NO 3
// A
var number  ;
document.write(" the value of  variable  is" + number + " <br>")
// B
var number = 5 ;
document.write("the initial value of  variable is " + number + "<br>" )
// C
number = number + 1;
// D
document.write("Value after decrement is: " + number + "<br>");
// E
number = number + 7;
document.write("Value after addition is: " + number + "<br>");

// F
number = number - 1;

// G
document.write("Value after decrement is: " + number + "<br>");

// H
var remainder = number % 3;

// I
document.write("The remainder is : " + remainder + "<br>");


// QUESTION NO 4
var ticketPrice = 600;
var totalcost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalcost + "PKR<br>");

// QUESTION NO 5
var num = +prompt("4");
num = Number(4);
document.write("<h2>Table of " + num + "</h2>");
var line1 = num;            // 4
var line2 = line1 + num;    // 4 + 4 = 8
var line3 = line2 + num;    // 8 + 4 = 12
var line4 = line3 + num;    // 12 + 4 = 16
var line5 = line4 + num;    // 16 + 4 = 20
var line6 = line5 + num;    // 20 + 4 = 24
var line7 = line6 + num;    // 24 + 4 = 28
var line8 = line7 + num;    // 28 + 4 = 32
var line9 = line8 + num;    // 32 + 4 = 36
var line10 = line9 + num;   // 36 + 4 = 40
document.write(num + " x 1 = " + line1 + "<br>")
    document.write(num + " x 2 = " + line2 + "<br>")
    document.write(num + " x 3 = " + line3 + "<br>")
   document.write(num + " x 4 = " + line4 + "<br>")
   document.write(num + " x 5 = " + line5 + "<br>")
    document.write(num + " x 6 = " + line6 + "<br>")
    document.write(num + " x 7 = " + line7 + "<br>")
   document.write(num + " x 8 = " + line8 + "<br>")
    document.write(num + " x 9 = " + line9 + "<br>")
    document.write(num + " x 10 = " + line10 + "<br>");
   
// var  line2 = line1 + num
// var line3 = line2 + num
// var line4 = line3 + num
// document.write( num + " x  1 = " + line1)
// document.write(num + "x 2 =" + line2 )
// document.write
 
// QUESTION NO 6
// A
var celsius = 25;
// B
var Fahrenheitans = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + Fahrenheitans + "°F<br>");
// C
var fahrenheit = 70;
// D
var celsiusans = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsiusans + "°C");


// QUESTION  NO 7
var item1Price = 650;      
var item2Price = 3;      
var item1Quantity = 3;     
var item2Quantity = 2;     
var shippingCharges = 150; 
var item1Total = item1Price * item1Quantity;
var item2Total = item2Price * item2Quantity;
var subTotal = item1Total + item2Total + shippingCharges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");

// QUESTION NO 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// QUESTION NO 9
var totalInPKR = (10 * 278.50) + (25 * 74.25);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalInPKR);

// QUESTION NO 10
var num = 7;
var result = ((num + 5) * 10) / 2;
document.write("<h1>Arithmetic Operations</h1>");

document.write("Initial number: " + num + "<br>");
document.write("Final result after calculations: " + result);

// QUESTION NO 11
var currentYear = 2026;
var birthYear = 2002;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h1>The Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");

// QUESTION NO 12
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// QUESION NO 13
var favoriteSnack = "Chocolate Chip Cookies";
var currentAge = 20;
var maxAge = 65;
var amountPerDay = 3;
var totalYearsLeft = maxAge - currentAge;
var totalNeeded = totalYearsLeft * 365 * amountPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
