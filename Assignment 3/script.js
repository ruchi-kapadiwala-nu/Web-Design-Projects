var count = 1;

var submitSelectedAwards = document.getElementById("button");

// onclick = "onArrowClick(this)"

function addNewRow() {
  var table = document.getElementById("myTable");
  var tBodyRef = document.getElementsByTagName("tbody")[0];

  var rows = table.rows;
  var secondLastRow = rows[rows.length - 2];
  var lastStudent = secondLastRow.innerHTML | "Student 0";

  // var lastStudent = table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var latestIndex = lastStudent.split(" ")[1];

  var tdNode = document.createElement("tr");

  var trCheckboxCell = document.createElement("td");
  trCheckboxCell.innerHTML = ' <input id = "checkbox" type = "checkbox" onclick = "onCheckboxClick(this)" /> <img src="down.png" width="25px"/>';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(latestIndex) + 1);
  var trStatusCell = document.createElement("td");
  trStatusCell.innerHTML = "Approved";
  var trSemCell = document.createElement("td");
  trSemCell.innerHTML = "Fall";
  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA";
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = "34567";
  var trPercentCell = document.createElement("td");
  trPercentCell.innerHTML = "100%";


  //appending inside tr
  tdNode.appendChild(trCheckboxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trStatusCell);
  tdNode.appendChild(trSemCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trPercentCell);

  //appending inside tBody
  tBodyRef.appendChild(tdNode);
}

function onCheckboxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  

  if (checkbox.checked == true) {
    //Changing color of background and button
    rowSelect.style.backgroundColor = "yellow";
    submitSelectedAwards.style.backgroundColor = "orange";
    submitSelectedAwards.style.borderColor = "orange";


    var trList = document.getElementsByTagName("tr");

    if (trList[0].lastElementChild.innerHTML !== "Edit") {

    //setting Column Names
    var table = document.getElementById("myTable");
    var tHeadRef = document.getElementsByTagName("thead")[0];
    var tdNode = tHeadRef.getElementsByTagName("tr")[0];

    var trDelete = document.createElement("th");
    trDelete.innerHTML = "Delete";
    var trEdit = document.createElement("th");
    trEdit.innerHTML = "Edit";

    //appending inside tr
    tdNode.appendChild(trDelete);
    tdNode.appendChild(trEdit);

    //appending inside tHead
    tHeadRef.appendChild(tdNode);
    }

    //delete button
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteId");
    deleteButton.innerHTML = '<button id = "delete" type = "button" onclick = "deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);

    //edit button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editId");
    editButton.innerHTML = '<button id = "edit" type = "button" onclick = "editRow(this)">Edit</button>';
    rowSelect.appendChild(editButton);

  } else {

    //Setting the background color back to default
    rowSelect.style.backgroundColor = "#fff";
    submitSelectedAwards.style.backgroundColor = "grey";
    submitSelectedAwards.style.borderColor = "grey";

    //deleting the 'delete' and 'edit' buttons
    rowSelect.deleteCell(8);
    rowSelect.deleteCell(8);
    submitFunctionality()
  }
}

function submitFunctionality() {

  var inputList = document.getElementsByTagName("input");

  for (i = 0; i < inputList.length; i++) {
    inputList[i].className = "checkbox";
  }

  var checkbox = document.getElementsByClassName("checkbox");
  var enableSubmitButton = false;

  for (j = 0; j < checkbox.length; j++) {
    if (checkbox[j].checked) {
      enableSubmitButton = true;
      break;
    }
  }

  var buttonElement = document.getElementById("button");

  if (enableSubmitButton) {
    // buttonElement.style.backgroundColor = "orange";
    // buttonElement.style.border = "2px solid orange";
  }
  else {
    // buttonElement.style.backgroundColor = "grey";
    // buttonElement.style.border = "2px solid grey";
    removeOrNotDeleteEditHeader();
  }
}

function removeOrNotDeleteEditHeader() {
  var trList = document.getElementsByTagName("tr");
  trList[0].removeChild(trList[0].lastElementChild);
  trList[0].removeChild(trList[0].lastElementChild);
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; //tr reference
  submitSelectedAwards.style.backgroundColor = "grey";
  submitSelectedAwards.style.borderColor = "grey";

  document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  document.getElementById("myTable").deleteRow(tr.rowIndex);

  count--;
  alert("Record deleted successfully");
}

function editRow(rowObject) {
  // var tr = rowObject.parentElement.parentElement; //tr reference

  // document.getElementById("myTable").editRow(tr.rowIndex);
  // count--;
  prompt("Edit the details");
}

function onArrowClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;

  if (checkbox.checked == true) {
    rowSelect.style.backgroundColor = "yellow";

    //delete button
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteId");
    deleteButton.innerHTML = '<button id = "delete" type = "button" onclick = "deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);

    //delete button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editId");
    editButton.innerHTML = '<button id = "edit" type = "button" onclick = "editRow(this)">Edit</button>';
    rowSelect.appendChild(editButton);

  } else {
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(8);
  }
}

//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");