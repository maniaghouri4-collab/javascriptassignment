//QUESTION NO 1
function greet(){
    alert("you are welcome")
}
//QUESTION NO 2


//QUESTION NO 3
function deletrow(button){

    var dltRow = button.parentNode.parentNode;
    dltRow.remove();
}

//QUESTION NO 4
function change(e) {
     console.log(e.target.src)
     e.target.src = "./images/BMW.jfif"
    
}
function previous(e) {
    console.log(e.target.src)
    e.target.src   = "./images/preve.jfif"
    
}
//QUESTION NO 5
var countvalue = 0;
function  increase(){
 countvalue ++;
 document.getElementById("counter").innerHTML = countvalue;


}
function decreace(){
    countvalue --;
    document.getElementById("counter").innerHTML = countvalue;

}