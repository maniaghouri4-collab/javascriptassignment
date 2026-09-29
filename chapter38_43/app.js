//QUESTION NO 1
// function customValue(a,b){
//     result = 1;
//     for(var i = 0; i < b; i++){
//        result = result * a
//       }
//        return result
//  }

// var last = customValue(2,8)
// document.write("a raised to b is " + last + "<br>")


//QUESTION NO 2
// var input = Number(prompt(" enter a year"))
// function leapYear(){
//   if (input % 4 === 0){
//     document.write(input + " is a leap year")
//   }else{
//     document.write(input + " is not  a leap year at all")
//   }
// }
// leapYear(input)

//QUESTION NO 3
// function semiPara(a,b,c){
//     result = (a + b + c) / 2
//     return result;
// }


// function area(a,b,c,d){
//     var d = semiPara(a,b,c)
//     result = Math.sqrt(d * (d - a) * (d - b) * (d - c))
//     return result
// }
// var final = area(3,4,5)
// document.write("answer is " + final)



//QUESTION NO 4
// function average(a,b,c){
//     var result = (a + b + c) / 3
//     return result

// }
// function percentege(a,b,c){
//   var d = 300
//     result = ((a + b + c )/ d) * 100
//     return result
// }
// function main(){
//     var input = Number(prompt("enter  the  first sub marks"))
// var inputt = Number(prompt("enter  the  second sub marks"))
// var inputtt = Number(prompt("enter  the  third sub marks"))
//     var total = average(input,inputt,inputtt);
//     var percent =  percentege(input,inputt,inputtt)
// document.write("averege marke  is " + total + "<br>")
// document.write("percentge is " + percent + "%" + "<br>")
// }
// var answer = main()



//QUESTION NO 5
// var text = "learning web development with javascript is fun and rewarding"
// var charcter = "j"

// function customindexOf(a,b){
//     for (var i =0; i <a.length; i++){
//         if( a[i] == b){
//             return i
//         }
//     }
//     return -1;
// }
//  var custom =  customindexOf(text,charcter);
//  if(custom !== -1){
//     document.write("the index number of character is " + custom)}
//     else{
//         document.write("charcter not found")
//     }

//QUESTION NO 6
// var sentence = "JavaScript is fun";

// function reomvevowls(str){
//     var consnents = ""
//     for(var i = 0; i <str.length; i++){
//         var lover = str[i].toLowerCase()
//         if(lover !== "a" && lover !== "e"  && lover !== "i" && lover !== "o" && lover !== "u")
//             consnents = consnents + str[i]
//     }
//     return consnents
// }
// function  condition(){
// if (sentence.length > 25){
//     document.write("sentence should be less  then  25   characters")
// }else{
//     var answer = reomvevowls(sentence)
//     document.write("original sentence " + sentence + "<br>")
//     document.write("without vowels " + answer)
// }
// }
// condition()

//QUESTION NO 7
// var text = "Pleases read this application and give me gratuity";
// function countVowls(str){
//     var count = 0;
//     var pairs = [];
//     var vowels = ["a", "e", "i", "o", "u"]

//     for(var i = 0; i <str.length-1; i++){
//         var first = str[i].toLowerCase()
//         var second = str[i + 1].toLowerCase()

//         switch (first) {
//             case 'a':
//                 case 'e':
//                     case 'i':
//                         case 'o':
//                             case 'u':
                
//                 if(vowels.includes(second)){
//                     count ++;
//                     pairs.push(str[i] + str[i + 1])
//                     i++;
                
//                 }
//                 break;
//                 default:
//                 break
//         }
//     }
//     return {count: count, pairs:pairs}
//     }
// function main(){
//     var result = countVowls(text)
//     document.write("original text : " + text + "<br>")
//      document.write("total pairs found : " + result.count + "<br>")
//       document.write("accurences : " + result.pairs.join(","))
// }
// main()

//QUESTION NO 8
// var distance1 = Number(prompt("enter distance in kilometer"));
// var distance2 = Number(prompt("enter distance in kilometer"));

// var total = distance1 + distance2

// function toMeter(a){
//     var meter = a * 1000
//     return meter
    
// }
// var distanceInMeter =  toMeter(total)
// document.write("total distace in meter " + distanceInMeter + "<br>")

// function toFeet(a){
//     var feet = a * 3280.84
//     return feet
    
// }
// var distanceInfeet =  toFeet(total)
// document.write("total distace in feet " + distanceInfeet + "<br>")

// function toInches(a){
//   var  inches = a * 39370.1
//     return inches
    
// }
// var distanceIninches =  toInches(total)
// document.write("total distace in inches " + distanceIninches + "<br>")

// function toCentimeters(a){
//  var  centimeters = a *10000
//  return centimeters
    
// }
// var distanceInincentemeters =  toCentimeters(total)
// document.write("total distace in inches " + distanceInincentemeters + "<br>")

//QUESTION NO 9
// var input = Number(prompt("enter the working hours"))

// function claculation(a){
//     if(input > 40){
//         var extra = input - 40;
//         var pay = extra * 12;
//         document.write("your overtime pay is " + pay)
//     }else{
//         document.write("No overtime worked")
//     }
// } claculation(input)


//QUESTION NO 10
var input = Number(prompt("enter the price"))
function calculetion(amount){
       var hundred = Math.floor(amount / 100)
       var remain = amount  % 100;

       var fifty = Math.floor(remain / 50);
       var remaining = remain % 50;

       var tenNote = Math.floor(remaining / 10);

       document.write("<h3>total amount: " + input +  "</h3>")
       document.write("100 Note: " + hundred + "<br>")
         document.write("50 Note: " + fifty + "<br>")
           document.write("10 Note: " + tenNote  + "<br>")
}
calculetion(input);