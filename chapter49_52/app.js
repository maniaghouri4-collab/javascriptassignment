//QUESTION NO 1   
// function data(e){
//     e.preventDefault()

//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value

//     document.getElementById("result").innerHTML = "Name: " + name  +  " |  Email: " + email
// }

//QUESTION NO 2
  function togglertext(){
      var text = document.getElementById("moretext")
      var btn = document.getElementById("btn")


      if(text.style.display =="none"){
        text.style.display = "inline";
        btn.innerHTML = "read less"
      }else{
        text.style.display = "none";
        btn.innerHTML = " Read More";

      }
  }
  //QUESTION NO 3
 var currentRowToEdit = null;

function addstudent(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sclass = document.getElementById("class").value;

    var tbody = document.getElementById("tablebody");

    var tr = document.createElement("tr");

    var td0 = document.createElement("td");
    td0.innerHTML = name;

    var td1 = document.createElement("td");
    td1.innerHTML = age;

    var td2 = document.createElement("td");
    td2.innerHTML = sclass;

    var td3 = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = function() { editRow(this); };

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() { deleteRow(this); };

    td3.appendChild(editBtn);
    td3.appendChild(document.createTextNode(" ")); 
    td3.appendChild(deleteBtn);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("class").value = "";
}

function deleteRow(btn) {
    var row = btn.closest("tr");
    row.remove();
}

function editRow(btn) {
    currentRowToEdit = btn.closest("tr");
    var cells = currentRowToEdit.getElementsByTagName("td");

    document.getElementById("updatename").value = cells[0].innerHTML;
    document.getElementById("updateage").value = cells[1].innerHTML;
    document.getElementById("updateclass").value = cells[2].innerHTML;

    document.getElementById("editformsection").style.display = "block";
}

function updatestudent(e) {
    e.preventDefault();

    var cells = currentRowToEdit.getElementsByTagName("td");
    cells[0].innerHTML = document.getElementById("updatename").value;
    cells[1].innerHTML = document.getElementById("updateage").value;
    cells[2].innerHTML = document.getElementById("updateclass").value;

    document.getElementById("editformsection").style.display = "none";
}