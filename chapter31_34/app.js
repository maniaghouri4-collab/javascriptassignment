// QUESTION NO 1
// var today = new Date()
// document.write(today)

// QUESTION NO 2
// var today = new Date ()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var ask = (months[today.getMonth()])
// document.write("current month " + ask )

// QUESTION NO 3
// var today = new Date ()
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var ask = (months[today.getMonth()])
// document.write("today is " + ask)

// QUESTION NO 4
// var today = new Date()

// var month =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var ask = month[(today.getDay())]

// if( ask =="sunday" || ask == "saturday" ){
//     document.write("It’s Fun day")
// }
// else{
//     document.write("It's a regular workday")
// }

// QUESTION NO 5
// var today = new Date()
//var daysofmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// var ask = today.getDate()

// if( ask <16 ){
//     document.write("First fifteen days of the month")
// }
//  else {
//     document.write("Last days of the month")
    
// }


// QUESTION NO 6
// var today  = new Date();
// document.write(today + "<br>")

// var millitime = today.getTime();
// document.write("elapsed millisecond since january 1, 1970: " + millitime + "<br>")

// var  minutTime = millitime / (1000 * 60)
// document.write("elapsed millisecond since january 1, 1970:" + minutTime + "<br>")


// QUESTION NO 7
// var today = new Date()
// var convert = today.getHours();

// if ( convert < 12){
//     document.write("Its AM")
// }
// else{
//     document.write("its PM")
// }

// QUESTION NO 8
// var laterdate = new Date(2020,11 ,31)
// document.write(laterdate)

// QUESTION NO 9
// var ramadanDate = new Date(2027, 1, 9)

// var nowDate = new Date();

// var difference = ramadanDate.getTime() - nowDate.getTime();

// var convert = Math.ceil(difference / (1000 * 60 * 60 * 24));

// document.write(convert + " days have passed since ramadan 2027! " )


// QUESTION NO 10
// var yearstart = new Date ("January 1, 2026 00:00:00");
// var nowyear = new Date ();
// var  difference = nowyear.getTime() - yearstart.getTime() ;


// var second = Math.floor(difference / 1000)
 
// document.write("on reference date "+ nowyear + "<br>")
//  document.write(second + "seconds have passed since begining of 2026")

// QUESTION NO 11
// var today = new Date()
// var date = new Date()
//  var hour = date.getHours();
//  date.setHours(hour + 1);

//  document.write("current date " + today + "<br>")
//  document.write("1 hour ago " + date +  "<br>")
   
// QUESTION NO 12
// var currentdate = new Date()
// var date = new Date()


// var convert = date.getFullYear() - 100

// date.setFullYear(convert)
// document.write("current date" + currentdate + "<br>")
// document.write("date get back to hundred years"  + date + "<br>")

// QUESTION NO 13
// var ask = Number(prompt("enter your birth yaer"));

// var today = new Date()

// var currenttime = today.getFullYear()

// var birthyear = currenttime - ask;

// document.write("your age is " + birthyear + "<br>")
// document.write("your birth year is " + ask + "<br>");

// QUESTION NO 14

// var  CustomerName = "Mania Ghouri"
// var CurrentMonth = "Febroury"
// var  Numberofunits = 410
// var Chargesperunit = 16;

// var  NetAmountPayable = Numberofunits * Chargesperunit;
// var LatePaymentSurcharge = 350;
// var  GrossAmountPayable = NetAmountPayable + LatePaymentSurcharge;

//  NetAmountPayable =  NetAmountPayable.toFixed(2)
//  LatePaymentSurcharge = LatePaymentSurcharge.toFixed(2)
//   GrossAmountPayable =  GrossAmountPayable.toFixed(2)
//    Chargesperunit =  Chargesperunit.toFixed(2)

// document.write("<h1>K-Electric Bill</h1>");
// document.write(" Customer Name: " + CustomerName + "<br>")
// document.write("Month: " + CurrentMonth + "<br>")
// document.write(" Number of units: " + Numberofunits + "<br>")
// document.write("Charges per unit: "  + Chargesperunit + "<br>");
// document.write(" Net Amount Payable (within Due Date): " + NetAmountPayable + "<br>" )
// document.write(" Late Payment Surcharge: " + LatePaymentSurcharge + "<br>")
// document.write( " Gross Amount Payable (after Due Date): "  +  GrossAmountPayable + "<br>")

