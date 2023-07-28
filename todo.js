var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addAssignment);

function addAssignment() {
    var inputText = document.getElementById("newTask").value;
    if (inputText === "") return;

    var newAssignment = document.createElement("li");

    var newSpan = document.createElement("span");
    newSpan.textContent = inputText;
    newAssignment.appendChild(newSpan);

    var newUpBtn = document.createElement("button");
    newUpBtn.setAttribute("class", "upBtn");
    newUpBtn.textContent = "Up";
    newUpBtn.addEventListener("click", upAssignment);
    newAssignment.appendChild(newUpBtn);

    var newDownBtn = document.createElement("button");
    newDownBtn.setAttribute("class", "downBtn");
    newDownBtn.textContent = "Down";
    newDownBtn.addEventListener("click", downAssignment);
    newAssignment.appendChild(newDownBtn);

    var newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute("class", "deleteBtn");
    newDeleteBtn.textContent = "Delete";
    newDeleteBtn.addEventListener("click", deleteAssignment);
    newAssignment.appendChild(newDeleteBtn);

    var todoList = document.getElementById("todoList");
    todoList.appendChild(newAssignment);

    document.getElementById("newTask").value = "";
}


function upAssignment() {
    var currentItem = this.parentElement;
    var previousItem = currentItem.previousElementSibling;

    if (previousItem && previousItem.tagName === "LI") {
        currentItem.parentElement.insertBefore(currentItem, previousItem);
    }
}

function downAssignment() {
    var currentItem = this.parentElement;
    var nextItem = currentItem.nextElementSibling;

    if (nextItem && nextItem.tagName === "LI") {
        currentItem.parentElement.insertBefore(nextItem, currentItem);
    }
}

function deleteAssignment() {
    var parentElement = this.parentElement;
    parentElement.remove();
}

var upBtns = document.getElementsByClassName("upBtn");
for (var i = 0; i < upBtns.length; i++) {
    upBtns[i].addEventListener("click", upAssignment);
}

var downBtns = document.getElementsByClassName("downBtn");
for (var j = 0; j < downBtns.length; j++) {
    downBtns[j].addEventListener("click", downAssignment);
}

var deleteBtns = document.getElementsByClassName("deleteBtn");
for (var k = 0; k < deleteBtns.length; k++) {
    deleteBtns[k].addEventListener("click", deleteAssignment);
}
