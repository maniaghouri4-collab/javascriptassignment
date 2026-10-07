//QUESTION NO 1
//(i)
var ID = document.getElementById("main-content")
console.log(ID)
//(ii)
console.log(ID.children)
//(iii)
var render = document.getElementsByClassName("render")
console.log(render[0].innerHTML)
console.log(render[1].innerHTML)
console.log(render[2].innerHTML)
//(iv)
var inputvalue = document.getElementById("first-name").value = "Alex"
console.log(inputvalue)
//(v)
var inputname = document.getElementById("first-name").value = " Bank"
console.log(inputname)
var inputemail = document.getElementById("first-name").value = "alexbank@example.com"
console.log(inputemail)

//QUESTION NO 2
//(i)
var type = document.getElementById("form-content").nodeType;
console.log(type)
//(ii)
var type1 = document.getElementById("lastName").nodeType;
console.log(type1)
var type2 = document.getElementById("lastName").childNodes[0].nodeType;
console.log(type2);
//(iii)
var update = document.getElementById("last-name").childNodes[0] = "Last Name:smith"; ;
console.log(update)
//(iv)
var  firstchild = document.getElementById("main-content").firstElementChild;
console.log(firstchild)
var  lastchild = document.getElementById("main-content").lastElementChild;
console.log(lastchild)
//(v)
var nestsibling = document.getElementById("lastName").nextElementSibling
console.log(nestsibling);
var previouselement = document.getElementById("lastName").previousElementSibling;
console.log(previouselement)
//(vi)
var parent = document.getElementById("email").parentNode;
console.log(parent)
var parent = document.getElementById("email").nodeType;
console.log(parent);