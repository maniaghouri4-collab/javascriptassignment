//QUESTION 1
// var itemsArray = [
//     { name: "juice",
//          price: "50",
//           quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ];

// var grandtotal = 0;
// for(var i =0; i<itemsArray.length; i++){
//     var  itemprice = Number(itemsArray[i].price)
//     var itemquantity = Number(itemsArray[i].quantity)
//     var total = itemprice * itemquantity;
//     console.log(itemsArray[i].name + " total price  is " + total ) ;

//     //grandtotal = grandtotal + total;
//     grandtotal += total;
// }
// console.log("grand total price of  all items is "   + grandtotal);

//QUESTION 2
// var propertiesName = {
//     name : "Mania",
//      email: "maniaghori4@gamail.com",
//       password: 125,
//        age: 22,
//        gender: "female",
//        city :"karachi" ,
//         country : "pakistan",
// }
// var ageexist = "age" in propertiesName;
// console.log("is age exist in this object? " + ageexist);
// var countryexist = "country"  in propertiesName;
// console.log("is country exist  in this  onject? " + countryexist);

// var firstname = "firstName" in  propertiesName;
// console.log("is firstnam property exist in this object? "   + firstname);
// var lastName = "lastName" in propertiesName;
// console.log("is last name prperties exist in this object? " + lastName);

//QUESTION 3
function  Car(brand,model,year,price){
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.price = price
}
var student1 =  new Car("toyota","cororla",2020,900000);
var student2 = new Car("honda","city",2021,1200000);
var student3 = new Car("suzuki","cultus",2022,800000);

console.log(student1);
console.log(student2);
console.log(student3);


//QUESTION 4
function populatiorecord(Name, gender, address, education, profession){
    this.Name = Name,
    this.gender = gender,
    this.address = address,
    this.education = education,
    this.profession =profession
}
var allrecor = [];
var form = document.getElementById("myform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var namvalue =document.getElementById("name").value;
    var gendervalue = document.querySelector(`input[name="gender"]:checked`).value
    var addressvalue =document.getElementById("address").value;
    var educationvalue =document.getElementById("Education").value;
    var professionvalue = document.getElementById("profession").value;
    
var newRecord = new populatiorecord(namvalue, gendervalue, addressvalue, educationvalue, professionvalue);
allrecor.push(newRecord);

console.log(allrecor);
form.reset();
})