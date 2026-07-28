// QUESTION  NO 1
var a = 10;
document.write("Result:<br>");

document.write("The value of a is: " + a + "<br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

ocument.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// QUESTION NO 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");  
document.write("b is: " + b + "<br>");     
document.write("result is: " + result);

// QUESTION NO 3
var userName = prompt("Please enter your name:");
document.write("<h1>Welcome!</h1>");
document.write("Hello " + userName + "! Hope you are having a great day.");

// QUESRION NO 4
var num = prompt("Enter a number:", 5);
var num = 5;
document.write("<h2>Table of " + num + "</h2>");
document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

// QUESTION NO 5
var subject1 = prompt("Enter first subject name:", "English");
var subject2 = prompt("Enter second subject name:", "Math");
var subject3 = prompt("Enter third subject name:", "Urdu");

var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

var percentage1 = (marks1 / totalMarksPerSubject) * 100;
var percentage2 = (marks2 / totalMarksPerSubject) * 100;
var percentage3 = (marks3 / totalMarksPerSubject) * 100;

var grandTotalMarks = totalMarksPerSubject * 3; 
var totalObtainedMarks = marks1 + marks2 + marks3;
var overallPercentage = (totalObtainedMarks / grandTotalMarks) * 100;

ocument.write("<h1>Marks Sheet</h1>");

document.write(subject1 + ": " + marks1 + " / " + totalMarksPerSubject + " (Percentage: " + percentage1 + "%)<br>");
document.write(subject2 + ": " + marks2 + " / " + totalMarksPerSubject + " (Percentage: " + percentage2 + "%)<br>");
document.write(subject3 + ": " + marks3 + " / " + totalMarksPerSubject + " (Percentage: " + percentage3 + "%)<br><br>");

document.write("<b>Total Marks: " + grandTotalMarks + "</b><br>");
document.write("<b>Obtained Marks: " + totalObtainedMarks + "</b><br>");
document.write("<b>Overall Percentage: " + overallPercentage + "%</b>");