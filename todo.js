$("#addBtn").click(addAssignment);

function addAssignment() {
    var inputText = $("#newTask").val();
    if (inputText === "") return;

    var newAssignment = $("<li>");
    var newSpan = $("<span>").text(inputText);
    var newUpBtn = $("<button>").attr("class", "upBtn").text("Up").click(upAssignment);
    var newDownBtn = $("<button>").attr("class", "downBtn").text("Down").click(downAssignment);
    var newDeleteBtn = $("<button>").attr("class", "deleteBtn").text("Delete").click(deleteAssignment);


    newAssignment.append(newSpan, newUpBtn, newDownBtn, newDeleteBtn)

    $("#todoList").append(newAssignment);

    $("#newTask").val("");
}


function upAssignment() {
    var currentItem = $(this).parent();
    var previousItem = currentItem.prev('li');

    if (previousItem.length > 0) {
        currentItem.insertBefore(previousItem);
    }
}

function downAssignment() {
    var currentItem = $(this).parent();
    var nextItem = currentItem.next('li');
    
    if (nextItem.length > 0) {
        currentItem.insertAfter(nextItem);
    }
}

function deleteAssignment() {
    $(this).parent().remove();
}

$(document).ready(function () {
    $(".upBtn").click(upAssignment);
    $(".downBtn").click(downAssignment);
    $(".deleteBtn").click(deleteAssignment);
})




